import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Category } from "./Category";

@Entity('questionnaries')
export class Questionnarie{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    categoryId:number;
    //{eager:true}
    @ManyToOne(type=>Category,category=>category.id)
    category: Category;
}