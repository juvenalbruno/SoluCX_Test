import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('assessment')
class Assessment {
    @PrimaryColumn('uudi')
    id: number;
    
    @Column('uuid')
    id_client: string;
    
    @Column('uuid')
    id_experience: number;
    
    @Column()
    note: number;
    
    @Column()
    comment: string;
    
}
export default Assessment;