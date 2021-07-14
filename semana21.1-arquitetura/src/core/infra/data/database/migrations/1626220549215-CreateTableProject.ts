import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableProject1626220549215 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'projects',
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
          name: 'desription',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'start_at',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'finish_at',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'user_uid',
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
          columnNames: ['user_uid'],
          referencedTableName: 'users',
          referencedColumnNames: ['uid'],
          name: 'projects_user_uid_fk',
        }),
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('projects', true, true, true);
  }

}
