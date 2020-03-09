import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "../models/Question";
import { Repository } from "typeorm";

@Injectable()
export class QuestionsService{

    constructor( 
        @InjectRepository(Question)
        private readonly questionsRepasitory: Repository<Question>
    ){}

    getAllQuestions(criteria={}): Promise<Question[]>{
        return this.questionsRepasitory.find(criteria);
    }

    createQuestion(question:Question){
        return this.questionsRepasitory.save(question);

    }
    
    updateQuestion(id:number,data:Partial<Question>){
        return this.questionsRepasitory.update(id,data);
    }

    deleteQuestion(id:number){
        return this.questionsRepasitory.delete(id);
    }

}