import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    private id: string;

    @Column()
    private firstName: string;

    @Column()
    private lastName: string;

    @Column({unique:true})
    private email: string;
}
