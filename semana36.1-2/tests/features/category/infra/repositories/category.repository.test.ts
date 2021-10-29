import CategoryRepository from '../../../../../src/features/category/infra/repositories/category.repository';

jest.mock(
  '../../../../../src/features/category/infra/repositories/category.repository'
);

describe('Category Repository', () => {
  describe('Salvar', () => {
    test('Deve criar uma nova categoria quando passar os dados válidos completos', async () => {
      expect.assertions(3);

      const entity = {
        name: 'Limpeza',
        description: 'Descrição Limpeza',
      };

      const repository = new CategoryRepository();

      const category = repository.create(entity.name, entity.description);

      expect(category).toBeTruthy();
      expect(category.name).toEqual(entity.name.toUpperCase());
      expect(category.description).toEqual(entity.description.toUpperCase());
    });

    test('Deve criar uma nova categoria quando passar os dados válidos sem descrição', async () => {
      expect.assertions(2);

      const entity = {
        name: 'Limpeza',
      };

      const repository = new CategoryRepository();

      const category = repository.create(entity.name);

      expect(category).toBeTruthy();
      expect(category.name).toEqual(entity.name.toUpperCase());
    });

    test('Deve lançar uma exceção quando já houver uma categoria de mesmo nome', async () => {
      // expect(() => {
      //   const entity = {
      //     name: 'Limpeza',
      //   };
      //   const repository = new CategoryRepository();
      //   repository.create(entity.name);
      //   repository.create(entity.name);
      // }).rejects.toThrowError('Error');
    });
  });

  describe('Deletar', () => {});
});
