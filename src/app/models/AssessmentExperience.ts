import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('assessment')
class Assessment {
    @PrimaryColumn('int')
    id: number;
    
    @Column()
    id_client: string;
    
    @Column()
    id_experience: number;
    
    @Column()
    note: number;
    
    @Column()
    comment: string;
    
}
export default Assessment;