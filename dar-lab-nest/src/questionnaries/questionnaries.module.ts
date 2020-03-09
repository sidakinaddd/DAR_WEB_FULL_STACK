import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/models/Category";
import { Questionnarie } from "src/models/Questionnarie";
import { CategoryService } from "./category.service";
import { CategoriesController } from "./category.controller";
import { QuestionnarieService } from "./questionnarie.service";
import { QuestionnariesController } from "./questionnarie.controller";
import { Question } from "../models/Question";
import { QuestionsService } from "./question.service";
import { QuestionController } from "./quetstion.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([Category,Questionnarie,Question]),
    ],
    exports:[
        TypeOrmModule,
    ],
    controllers:[
        CategoriesController,
        QuestionnariesController,
        QuestionController
    ],
    providers:[
        CategoryService,
        QuestionnarieService,
        QuestionsService
    ],
})
export class QuestionnariesModule{

}