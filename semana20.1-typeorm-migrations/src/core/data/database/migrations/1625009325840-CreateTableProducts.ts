import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableProducts1625009325840 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: 'uid',
          type: 'uuid',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'name',
          type: 'varchar',
          length: '50',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'amount',
          type: 'numeric',
          precision: 6,
          scale: 2,
          isNullable: false,
        },
        {
          name: 'categorie_uid',
          type: 'uuid',
          isNullable: false,
          
        },
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          isNullable: false,
        },
      ],
      foreignKeys: [
        new TableForeignKey({
          columnNames: ['categorie_uid'],
          referencedColumnNames: ['uid'],
          referencedTableName: 'categories',
        }),
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products', true, true, true);
  }
}
