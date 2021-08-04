import {
  HttpRequest,
  notFound,
  ok,
  serverError,
  ProjectController
} from '../../../../../src/features/projects/presentation';

import { ProjectRepository, CacheRepository } from '../../../../../src/features/projects/infra';
import { Project } from '../../../../../src/features/projects/domain/models';

jest.mock('../../../../../src/features/projects/infra/repositories/project.repository.ts');
jest.mock('../../../../../src/core/infra/repositories/cache.repository.ts');

const makeRequestStore = (): HttpRequest => ({
  body: {
    name: 'any_name',
    description: 'any_description',
    startAt: new Date(Date.now()).toLocaleDateString(),
    finishAt: new Date(Date.now()).toLocaleDateString(),
    userUid: 'any_uid'
  },
  params: {}
});

const makeRequestShow = (): HttpRequest => ({
  body: {},
  params: {
    uid: 'any_uid',
  }
});

const makeRequestResult = (): Project => ({
  uid: 'any_uid',
  name: 'any_name',
  userUid: 'any_uid',
});

// SUT = system under test
const makeSut = (): ProjectController => {
  return new ProjectController(
    new ProjectRepository(),
    new CacheRepository(),
  );
};

describe('Project Controller', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Store', () => {
    // com dados corretos
    // com dados incorretos
    // com dados com tamanho x
    // com usuário que não existe
    test('Should return code 500 when throw any exception', async () => {
      jest.spyOn(ProjectRepository.prototype, 'create')
        .mockRejectedValue(new Error());

      const sut = makeSut();
      const result = await sut.store(makeRequestStore());

      expect(result).toEqual(serverError());
    });

    test('Should call ProjectRepository when sent correct values', async () => {
      const createSpy = jest.spyOn(ProjectRepository.prototype, 'create');
      const sut = makeSut();

      await sut.store(makeRequestStore());

      expect(createSpy).toHaveBeenCalledWith(makeRequestStore().body);
    });

    test('Should return code 200 when valid data was provided', async () => {
      jest.spyOn(ProjectRepository.prototype, 'create')
        .mockResolvedValue(makeRequestResult());

      const sut = makeSut();
      const result = await sut.store(makeRequestStore());

      expect(result).toEqual(ok(makeRequestResult()));
    });
  });
});