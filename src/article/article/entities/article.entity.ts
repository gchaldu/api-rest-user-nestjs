import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('article')
export class Article {

    @PrimaryGeneratedColumn('uuid')
    private id: string;
    @Column({name: 'titulo'})
    private title: string;
    @Column()
    private subtitle: string;
    @Column()
    private descripcion: string;
}
