import userData from '../../../../core/infra/data/users.data';
import BaseRepository from '../../../../core/infra/repositories/base.repository';
import UserDTO from '../dto/user.dto';

export default class UserRepository extends BaseRepository {
    constructor() {
        super(userData);
    }

    getOne(id: number): UserDTO {
        const user = this.data.find(item => item.id === id);

        return UserDTO.mapper(user);
    }
}