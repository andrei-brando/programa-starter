import { Entity, BaseEntity, PrimaryColumn, Column } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity({ name: 'profile' })
export class Profile extends BaseEntity {

}
