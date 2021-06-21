import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ClientExperience1624257364246 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'experience',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_client',
                    type: 'uuid',
                },
                {
                    name: 'loja',
                    type: 'varchar',
                },
                {
                    name: 'colaborador',
                    type: 'varchar',
                },
                {
                    name: 'date',
                    type: 'varchar',
                },
                {
                    name: 'valor',
                    type: 'varchar',
                }
            ],
            foreignKeys: [
                {
                  name: "providerClient",
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  columnNames: ["id_client"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE"
                }
              ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('experience');
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    }
}
