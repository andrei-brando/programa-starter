import { UserEntity } from '../../infra';
import { User } from '../../domain';

export class UserRepository {
    async getOne(uid: string): Promise<User | null> {
        const user = await UserEntity.findOne(uid);

        if (!user) {
            return null
        }

        return {
            uid: user.uid,
            login: user.login,
            password: user.password
        };
    }
}