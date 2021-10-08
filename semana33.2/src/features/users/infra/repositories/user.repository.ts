import usersData from "../../../../core/infra/data/users.data";
import BaseRepository from "../../../../core/infra/repositories/base.repository";
import UserDto from "../dtos/user.dto";

export default class UserRepository extends BaseRepository {
  constructor() {
    super(usersData);
  }

  public getOne(id: number) {
    const user = this.data.find((item) => item.id === id);

    const userDTO = UserDto.mapper(user);

    return userDTO;
  }
}
