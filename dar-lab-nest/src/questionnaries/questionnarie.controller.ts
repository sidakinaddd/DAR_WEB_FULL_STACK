import { Controller,Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { User } from '../models/User';
import { Category } from 'src/models/Category';
import { QuestionnarieService } from './questionnarie.service'
import { Questionnarie } from 'src/models/Questionnarie';
@Controller('questionnaries')
export class QuestionnariesController {
constructor(private readonly questionnariesService: QuestionnarieService){}
  @Get()
  getAll(){
    return this.questionnariesService.getQuestionnarie();
  }

  @Post()
  createCategory(@Body() questionnarie:Questionnarie){
      return this.questionnariesService.createQuestionnarie(questionnarie);
  }
  @Get(':id')
  getOne(@Param() params){
    return this.questionnariesService.getOneQuestionnarie(params.id);
  }

  @Put(':id')
  update(@Param() params,@Body() questionnarie:Questionnarie){
    return this.questionnariesService.updateQuestionnarie(params.id,questionnarie);
  }

//   @Delete(':id')
//   deleteCategory(@Param() params){
//     return this.categoriesService.deleteCategory(params.id);
//   }
}
