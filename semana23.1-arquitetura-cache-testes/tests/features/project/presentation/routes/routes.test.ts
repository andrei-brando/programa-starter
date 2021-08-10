import express, { Router } from 'express';
import IORedis from 'ioredis';
import request from 'supertest';
import { v4 as uuid } from 'uuid';
import {
  Database,
  ProjectEntity,
  UserEntity,
} from '../../../../../src/core/infra';
import App from '../../../../../src/core/presentation/app';
import { Project } from '../../../../../src/features/projects/domain/models';
import ProjectRoutes from '../../../../../src/features/projects/presentation/routes/routes';

jest.mock('ioredis');

const makeUser = async (): Promise<UserEntity> => {
  return UserEntity.create({
    login: 'any_login',
    password: 'any_pass',
  }).save();
}

const makeProject = async (): Promise<ProjectEntity> => {
  const user = await makeUser();

  return ProjectEntity.create({
    name: 'any_name',
    userUid: user.uid,
  }).save();
}

const makeResult = (): Project => ({
  uid: 'any_uid',
  name: 'any_name',
  userUid: 'any_uid',
});

describe('Project routes', () => {
  const server = new App().server;

  beforeEach(async () => {
    await ProjectEntity.clear();
    await UserEntity.clear();

    jest.resetAllMocks();
  });

  beforeAll(async () => {
    await new Database().openConnection();

    const router = Router();
    server.use(express.json());

    server.use(router);

    new ProjectRoutes().init(router);
  });

  afterAll(async () => {
    await new Database().disconnectDatabase();
  });

  describe('/post projects', () => {
    test('Should return code 400 when save project with invalid name', async () => {
      const user = await makeUser();

      await request(server).post('/projects')
        .send({
          description: 'any_description',
          startAt: new Date().toLocaleDateString(),
          fisishAt: new Date().toLocaleDateString(),
          userUid: user.uid,
        })
        .expect(400, { error: 'Missing param: name' });
    });

    test('Should return code 200 when save a new project', async () => {
      const user = await makeUser();

      await request(server).post('/projects')
        .send({
          name: 'any_name',
          description: 'any_description',
          startAt: new Date().toLocaleDateString(),
          finishAt: new Date().toLocaleDateString(),
          userUid: user.uid,
        })
        .expect(200)
        .expect(request => {
          expect(request.body.userUid).toBe(user.uid);
        });
    });

    test('Should return code 400 when userUid is invalid', async () => {
      await request(server).post('/projects')
        .send({
          name: 'any_name',
          description: 'any_description',
          startAt: new Date().toLocaleDateString(),
          finishAt: new Date().toLocaleDateString(),
          userUid: 'fake_uid',
        })
        .expect(400, { error: 'Invalid param: userUid' });
    });
  });
});