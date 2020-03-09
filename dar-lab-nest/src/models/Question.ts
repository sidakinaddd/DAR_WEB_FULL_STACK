import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany,ManyToOne } from "typeorm";
import { Questionnarie } from "./Questionnarie";

@Entity({name:'questions'})
export class Question{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    text:string;

    @Column()
    score: number;

    @ManyToOne(type=>Questionnarie,questionnarie=>questionnarie.id)
    questionnarie: Questionnarie;
}