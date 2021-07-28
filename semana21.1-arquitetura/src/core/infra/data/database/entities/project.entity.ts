import {
  Entity,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  OneToMany
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { TaskEntity } from "./task";
import { UserEntity } from "./user.entity";

@Entity({ name: 'projects' })
export class ProjectEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column({ name: 'user_uid' })
  userUid!: string;

  @Column()
  name!: string;

  @Column()
  description?: string;

  @Column({ name: 'start_at' })
  startAt?: Date;

  @Column({ name: 'finish_at' })
  finishAt?: Date;

  @Column({ name: 'created_at' })
  createdAt!: Date;

  @Column({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(_ => UserEntity, user => user.projects)
  @JoinColumn({ name: 'user_uid', referencedColumnName: 'uid' })
  user!: UserEntity;

  @OneToMany(_ => TaskEntity, task => task.project)
  tasks!: TaskEntity[];

  @BeforeInsert()
  private beforeInsert() {
    this.uid = uuid();
    this.createdAt = new Date(Date.now());
    this.updatedAt = new Date(Date.now());
  }

  @BeforeUpdate()
  private beforeUpdate() {
    this.updatedAt = new Date(Date.now());
  }
}
