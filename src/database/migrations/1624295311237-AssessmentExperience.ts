import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AssessmentExperience1624295311237 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'assessment',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'id_client',
                    type: 'uuid',
                },
                {
                    name: 'id_experience',
                    type: 'ind',
                },
                {
                    name: 'note',
                    type: 'varchar',
                },
                {
                    name: 'comment',
                    type: 'varchar',
                }
            ],
            foreignKeys: [
                {
                    name: "providerAssessment",
                    referencedTableName: "experience",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_experience"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('assessment');
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    }

}
