import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";

import { v4 as uuid } from "uuid";
import { ProjectEntity } from "./project.entity";
import { ProfileEntity } from "./profile.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column()
  login?: string;

  @Column()
  password?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @OneToOne(_ => ProfileEntity, profile => profile.user)
  profile?: ProfileEntity;

  @OneToMany(_ => ProjectEntity, project => project.user)
  projects?: ProjectEntity[];

  @BeforeInsert()
  private beforeInsert() {
    this.uid = uuid();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  private beforeUpdate() {
    this.updatedAt = new Date();
  }

  constructor(login: string, password: string) {
    super();
    this.login = login;
    this.password = password;
  }
}
