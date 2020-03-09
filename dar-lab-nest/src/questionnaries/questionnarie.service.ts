import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { Questionnarie } from "src/models/Questionnarie";


@Injectable()
export class QuestionnarieService{

    constructor( 
        @InjectRepository(Questionnarie)
        private readonly questionnarieRepository: Repository<Questionnarie> ,
       
    ){}

    getQuestionnarie(criteria={}): Promise<Questionnarie[]>{
        return this.questionnarieRepository.find(criteria);

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

}