import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  BeforeUpdate,
  BeforeInsert,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { UserEntity } from "./user.entity";

@Entity({ name: 'projects' })
export class ProjectEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column()
  name!: string;

  @Column()
  description?: string;

  @Column({ name: 'start_at' })
  startAt?: Date;

  @Column({ name: 'finish_at' })
  finishAt?: Date;

  @Column({ name: 'user_uid' })
  userUid!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(_ => UserEntity, user => user.projects)
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
