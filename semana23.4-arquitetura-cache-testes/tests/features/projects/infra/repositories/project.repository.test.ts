import { UserEntity, ProjectEntity, Database } from '../../../../../src/core/infra';
import { Project } from '../../../../../src/core/domain';
import { ProjectRepository } from '../../../../../src/features/projects/infra';

const makeUser = async (): Promise<UserEntity> => {
  return UserEntity.create({
    login: 'any_login',
    password: 'any_pass'
  }).save();
}

const makeProject = async (): Promise<Project> => {
  const user = await makeUser();

  return ProjectEntity.create({
    name: 'any_name',
    description: 'any_description',
    userUid: user.uid,
    startAt: new Date(Date.now()).toLocaleDateString(),
    finishAt: new Date(Date.now()).toLocaleDateString()
  }).save();
}

const makeParams = async () => {
  const user = await makeUser();

  return {
    name: 'any_name',
    description: 'any_description',
    startAt: new Date(Date.now()).toLocaleDateString(),
    finishAt: new Date(Date.now()).toLocaleDateString(),
    userUid: user.uid
  };
}

describe('Project Repository', () => {
  beforeAll(async () => {
    await new Database().openConnection();
  });

  beforeEach(async () => {
    await ProjectEntity.clear();
    await UserEntity.clear();
  });

  afterAll(async () => {
    await new Database().disconnectDatabase();
  });

  describe('Create', () => {
    test('should create a new project when has valid params', async () => {
      const params = await makeParams();
      const project = new ProjectRepository();
      const result = await project.create(params);

      expect(result).toBeTruthy();
      expect(result.uid).toBeTruthy();
      expect(result.name).toEqual(params.name);
      expect(result.description).toEqual(params.description);
    });
  });

  describe('GetAll', () => {
    test('should get all projects', async () => {
      const fakeProject = await makeProject();

      jest.spyOn(ProjectRepository.prototype, 'getAll')
        .mockResolvedValue([fakeProject, fakeProject]);

      const sut = new ProjectRepository();
      const result = await sut.getAll();

      expect(result.length).toBeGreaterThan(0);
      expect(result.length).toBe(2);

      for (const project of result) {
        expect(project).toHaveProperty('uid');
        expect(project.uid).not.toBeNull();
      }
    });
  });

  describe('GetOne', () => {
    test('should get one project', async () => {
      const fakeProject = await makeProject();

      jest.spyOn(ProjectRepository.prototype, 'getOne')
        .mockResolvedValue(fakeProject);

      const sut = new ProjectRepository();
      const result = await sut.getOne(fakeProject.uid);

      expect(result).not.toBeNull();
      expect(result).toHaveProperty('uid');
      expect(result?.uid).toEqual(fakeProject.uid);
    });
  });

  describe('Update', () => {

  });

  describe('Delete', () => {

  });

});