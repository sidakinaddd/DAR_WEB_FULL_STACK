import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Questionnarie } from "./Questionnarie";

@Entity({name:'categories'})
export class Category{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(type=>Questionnarie, questionnarie=>questionnarie.id)
    questionnaries:Questionnarie[];
}