import { Entity, PrimaryColumn, Column, BeforeUpdate } from 'typeorm';

@Entity('experience')
class Experience {
    @PrimaryColumn('uuid')
    id: number;

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
