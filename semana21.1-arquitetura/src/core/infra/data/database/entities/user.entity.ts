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
import { Project } from "./project.entity";
import { Profile } from "./profile.entity";

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryColumn()
  uid: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;

}
