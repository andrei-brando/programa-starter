import {
  Entity,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  OneToMany,
  OneToOne,
  PrimaryColumn
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { ProfileDataEntity } from './profile-data.entity';
import { ProjectEntity } from './project.entity';
import { TaskEntity } from "./task.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column()
  login!: string;

  @Column()
  password?: string;

  @Column({ name: 'created_at' })
  createdAt!: Date;

  @Column({ name: 'updated_at' })
  updatedAt!: Date;

  @OneToOne(_ => ProfileDataEntity, profileData => profileData.user)
  profileData?: ProfileDataEntity

  @OneToMany(_ => ProjectEntity, project => project.user)
  projects?: ProjectEntity[];

  @OneToMany(_ => TaskEntity, task => task.userAuthor)
  taskAuthor!: TaskEntity[];

  @OneToMany(_ => TaskEntity, task => task.userExecuter)
  taskExecuter!: TaskEntity[];

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
