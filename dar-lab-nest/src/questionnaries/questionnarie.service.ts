import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/models/Category";
import { Repository } from "typeorm";
import { threadId } from "worker_threads";
import { Questionnarie } from "src/models/Questionnarie";

@Injectable()
export class QuestionnarieService{

    constructor( 
        @InjectRepository(Questionnarie)
        private readonly questionnarieRepository: Repository<Questionnarie> 
    ){}

    getQuestionnarie(): Promise<Questionnarie[]>{
        return this.questionnarieRepository.find();

    }
    getOneQuestionnarie(id:number):Promise<Questionnarie>{
        return this.questionnarieRepository.findOne(id);
    }


    createQuestionnarie(questionnarie:Questionnarie){
        return this.questionnarieRepository.save(questionnarie);

    }
    
    updateQuestionnarie(id:number,data:Partial<Questionnarie>){
        return this.questionnarieRepository.update(id,data);
    }

    // deleteCategory(id:number){
    //     return this.categoriesRepository.delete(id);
    // }
}