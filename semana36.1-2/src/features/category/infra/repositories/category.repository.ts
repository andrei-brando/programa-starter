import CategoryDTO from '../dto/category.dto';

export default class CategoryRepository {
  create(name: string, description: string | null = null): CategoryDTO {
    return CategoryDTO.mapper({
      id: 1,
      name,
      description,
    });
  }
}
