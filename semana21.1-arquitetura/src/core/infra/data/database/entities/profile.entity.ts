import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  BeforeUpdate,
  BeforeInsert,
  JoinColumn,
  OneToOne
} from "typeorm";

import { v4 as uuid } from "uuid";
import { UserEntity } from "./user.entity";

@Entity({ name: 'profile' })
export class ProfileEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  cpf!: string;

  @Column({ name: 'user_uid' })
  userUid!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @OneToOne(_ => UserEntity, user => user.profile)
  @JoinColumn({ name: 'user_uid', referencedColumnName: 'uid' })
  user?: UserEntity;

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
}
