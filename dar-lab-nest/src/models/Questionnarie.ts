import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Category } from "./Category";
import { Question } from "./Question"

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

    @OneToMany(type=>Questionnarie, questionnarie=>questionnarie.id)
    questions: Question[];
}