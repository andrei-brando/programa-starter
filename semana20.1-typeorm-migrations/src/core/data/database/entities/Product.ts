import { Entity, BaseEntity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './Category';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @PrimaryColumn()
  uid?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column({ name: 'categorie_uid' })
  categoryUid: string;

  @Column({ name: 'created_at' })
  createdAt?: Date;

  @Column({ name: 'updated_at' })
  updatedAt?: Date;

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

  @ManyToOne(type => Category, category => category.products)
  @JoinColumn({ name: 'categorie_uid', referencedColumnName: 'uid' })
  category?: Category;

  constructor(
    name: string,
    description: string,
    amount: number,
    categoryUid: string,
    uid?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super();
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.categoryUid = categoryUid;
    this.uid = uid;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
