import { Controller,Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { User } from '../models/User';
import { Category } from 'src/models/Category';
import { QuestionnarieService } from './questionnarie.service';
@Controller('categories')
export class CategoriesController {
constructor(
    private readonly categoriesService: CategoryService,
    private readonly questionnariesService: QuestionnarieService,
){}
  @Get()
  getAll(){
    return this.categoriesService.getCategories();
  }

  @Post()
  createCategory(@Body() category:Category){
      return this.categoriesService.createCategory(category);
  }
  @Get(':id')
  getOne(@Param() params){
    return this.categoriesService.getOneCategory(params.id);
  }

  @Put(':id')
  update(@Param() params,@Body() category:Category){
    return this.categoriesService.updateCategory(params.id,category);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id:number){
    return this.categoriesService.deleteCategory(id);
  }

  @Get(':id/questionnairies')
  getQuestionnairies(@Param('id') id) {
      return this.questionnariesService.getQuestionnarie(({categoryId: id}));
  }

}
