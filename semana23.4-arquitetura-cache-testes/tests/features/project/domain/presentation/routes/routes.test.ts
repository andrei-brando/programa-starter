import express, { Router } from 'express';
import IORedis from 'ioredis';
import request from 'supertest';
import { v4 as uuid } from 'uuid';
import {
  Database,
  ProjectEntity,
  UserEntity,
} from '../../../../../../src/core/infra';
import App from '../../../../../../src/core/presentation/app';
import ProjectRoutes from '../../../../../../src/features/projects/presentation/routes/routes';
import { ProjectRepository } from '../../../../../../src/features/projects/infra';

jest.mock('ioredis');
jest.mock('../../../../../src/features/projects/infra/repositories/project.repository.ts');

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
    description: 'any_description',
    startAt: new Date().toLocaleDateString(),
    finishAt: new Date().toLocaleDateString(),
    userUid: user.uid,
  }).save();
}

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
      const project = await makeProject();

      jest.spyOn(ProjectRepository.prototype, 'create')
        .mockResolvedValue(project);

      await request(server).post('/projects')
        .send({
          name: 'any_name',
          description: 'any_description',
          startAt: new Date().toLocaleDateString(),
          finishAt: new Date().toLocaleDateString(),
          userUid: project.userUid,
        }).expect(200)
        .expect(request => {
          expect(request.body.userUid).toBe(project.userUid);
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

  describe('/Get projects', () => {
    test('Should return 200 code when has any project', async () => {
      const project = await makeProject();

      jest.spyOn(ProjectRepository.prototype, 'getAll')
        .mockResolvedValue([project]);

      await request(server).get('/projects')
        .expect(200);
    });
  });

  describe('/Get projects/:uid', () => {
    test('Should return 200 code when has any project by uid', async () => {
      const project = await makeProject();

      jest.spyOn(ProjectRepository.prototype, 'getOne')
        .mockResolvedValue(project);

      await request(server).get(`/projects/${project.uid}`)
        .expect(200)
        .expect(request => {
          expect(request.body.uid).toEqual(project.uid);
        });
    });
  });
});