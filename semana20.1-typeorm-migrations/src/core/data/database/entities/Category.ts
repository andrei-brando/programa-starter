import { Entity, PrimaryColumn, BaseEntity, Column, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { Product } from './Product';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {

  @PrimaryColumn()
  uid?: String;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  tag: string;

  @Column({ name: 'created_at' })
  createdAt?: Date;

  @Column({ name: 'updated_at' })
  updatedAt?: Date;

  @OneToMany(type => Product, product => product.category)
  products?: Product[];

  @BeforeInsert()
  private beforeInsert() {
    this.uid = this.uid ? this.uid : uuidv4();

    
    this.createdAt = this.createdAt ? this.createdAt : new Date(Date.now());
    this.updatedAt = this.updatedAt ? this.updatedAt : new Date(Date.now());
  }

  @BeforeUpdate()
  private beforeUpdate() {
    this.updatedAt = new Date(Date.now());
  }

  constructor(
    name: string,
    description: string,
    tag: string,
    uid?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super();
    this.name = name;
    this.description = description;
    this.tag = tag;
    this.uid = uid;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
