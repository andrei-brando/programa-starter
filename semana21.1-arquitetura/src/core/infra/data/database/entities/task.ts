import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { ProjectEntity } from "./project.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'tasks' })
export class TaskEntity extends BaseEntity {

  @PrimaryColumn()
  uid!: string;

  @Column()
  title!: string;

  @Column()
  description?: string;

  @Column({ name: 'author_uid' })
  authorUid!: string;

  @Column({ name: 'executer_uid' })
  executerUid!: string;

  @Column({ name: 'project_uid' })
  projectUid!: string;

  @Column({ name: 'created_at' })
  createdAt!: Date;

  @Column({ name: 'updated_at' })
  updatedAt!: Date;

  @BeforeInsert()
  private beforeInsert() {
    this.uid = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @ManyToOne(_ => ProjectEntity, project => project.tasks)
  @JoinColumn({ name: 'project_uid', referencedColumnName: 'uid' })
  project!: ProjectEntity;

  @ManyToOne(_ => UserEntity, user => user.taskAuthor)
  @JoinColumn({ name: 'author_uid', referencedColumnName: 'uid' })
  userAuthor!: UserEntity;

  @ManyToOne(_ => UserEntity, user => user.taskExecuter)
  @JoinColumn({ name: 'executer_uid', referencedColumnName: 'uid' })
  userExecuter!: UserEntity;

  @BeforeUpdate()
  private beforeupdate() {
    this.updatedAt = new Date();
  }
}
