import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('assessment')
class Assessment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('uuid')
    id_client: string;
    
    @Column('uuid')
    id_experience: string;
    
    @Column()
    note: number;
    
    @Column()
    comment: string;
    
}
export default Assessment;