export default class CategoryDTO {
  name!: string;
  description!: string;

  static mapper(params: any) {
    const dto = new CategoryDTO();

    dto.name = params.name.toUpperCase();
    dto.description = params.description?.toUpperCase();

    return dto;
  }
}
