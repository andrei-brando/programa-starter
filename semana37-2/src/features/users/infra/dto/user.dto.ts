export default class UserDTO {
    name!: String;
    email!: String;

    static mapper(user: any) {
        const dto = new UserDTO();

        dto.name = user.name;
        dto.email = user.email;

        return dto;
    }
}