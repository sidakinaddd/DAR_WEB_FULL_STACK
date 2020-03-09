import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/models/Category";
import { Questionnarie } from "src/models/Questionnarie";
import { CategoryService } from "./category.service";
import { CategoriesController } from "./category.controller";
import { QuestionnarieService } from "./questionnarie.service";
import { QuestionnariesController } from "./questionnarie.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([Category,Questionnarie]),
    ],
    exports:[
        TypeOrmModule,
    ],
    controllers:[
        CategoriesController,
        QuestionnariesController,
    ],
    providers:[
        CategoryService,
        QuestionnarieService,
    ],
})
export class QuestionnariesModule{

}