import CategoryDTO from '../../../../../src/features/category/infra/dto/category.dto';

describe('Category DTO', () => {
  test('Deverá converter uma entidade em um DTO', () => {
    expect.assertions(3);

    const entity = {
      id: 1,
      name: 'Limpeza',
      description: 'Descrição Limpeza',
    };

    const dto = CategoryDTO.mapper(entity);

    expect(dto).toBeTruthy();
    expect(dto.name).toEqual(entity.name.toUpperCase());
    expect(dto.description).toEqual(entity.description.toUpperCase());
  });

  test('Deverá converter uma entidade em um DTO sem descrição', () => {
    expect.assertions(2);

    const entity = {
      id: 1,
      name: 'Limpeza',
    };

    const dto = CategoryDTO.mapper(entity);

    expect(dto).toBeTruthy();
    expect(dto.name).toEqual(entity.name.toUpperCase());
    // expect(dto.description).toEqual(entity.description.toUpperCase());
  });
});
