import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/models/Category";
import { Repository } from "typeorm";
import { threadId } from "worker_threads";

@Injectable()
export class CategoryService{

    constructor( 
        @InjectRepository(Category)
        private readonly categoriesRepository: Repository<Category> 
    ){}

    getCategories(): Promise<Category[]>{
        return this.categoriesRepository.find();

    }
    getOneCategory(id:number):Promise<Category>{
        return this.categoriesRepository.findOne(id);
    }


    createCategory(category:Category){
        return this.categoriesRepository.save(category);

    }
    
    updateCategory(id:number,data:Partial<Category>){
        return this.categoriesRepository.update(id,data);
    }

    deleteCategory(id:number){
        return this.categoriesRepository.delete(id);
    }
    
}