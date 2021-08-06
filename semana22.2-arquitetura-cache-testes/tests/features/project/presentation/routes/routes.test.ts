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
  })
});