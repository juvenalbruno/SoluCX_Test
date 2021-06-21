import { Entity, PrimaryColumn, Column, BeforeUpdate } from 'typeorm';

@Entity('experience')
class Experience {
    @PrimaryColumn('int')
    id: number;

    @Column('uuid')
    id_Client: string;

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
