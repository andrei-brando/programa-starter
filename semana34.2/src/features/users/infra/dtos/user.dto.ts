// interface UserDto {
//   name: string;
//   email: string;
// }

export default class UserDto {
  name!: string;
  email!: string;

  static mapper(user: any) {
    const dto = new UserDto();
    dto.name = user.name;
    dto.email = user.email;

    return dto;
  }
}
