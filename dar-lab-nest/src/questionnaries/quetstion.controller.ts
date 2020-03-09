import { Controller,Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { User } from '../models/User';
import { Category } from 'src/models/Category';
import { QuestionsService } from './question.service';
import { QuestionnarieService } from './questionnarie.service';
import { Questionnarie } from 'src/models/Questionnarie';
import { Question } from 'src/models/Question';
@Controller('questions')
export class QuestionController {
constructor(private readonly questionsService: QuestionsService){}
  @Get()
  getAllQuestions(){
    return this.questionsService.getAllQuestions();
  }

  @Post()
  createQuestion(@Body() question:Question){
      return this.questionsService.createQuestion(question);
  }
//   @Get(':id')
//   getOne(@Param() params){
//     return this.questionsService.getOneQuestion(params.id);
//   }

  @Put(':id')
  update(@Param() params,@Body() question:Question){
    return this.questionsService.updateQuestion(params.id,question);
  }

  @Delete(':id')
  deleteCategory(@Param() params){
    return this.questionsService.deleteQuestion(params.id);
  }
}
