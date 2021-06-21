import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate } from 'typeorm';

@Entity('experience')
class Experience {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    id_client: string;

    @Column()
    @BeforeUpdate()
    loja: string;

    @Column()
    @BeforeUpdate()
    colaborador: string;

    @Column()
    @BeforeUpdate()
    date: string;

    @Column()
    @BeforeUpdate()
    valor: number;

}

export default Experience;
