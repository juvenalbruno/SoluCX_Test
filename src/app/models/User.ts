import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    @BeforeUpdate()
    email: string;

    @Column()
    @BeforeUpdate()
    tel: number;

    @Column()
    cpf: number;
}

export default User;