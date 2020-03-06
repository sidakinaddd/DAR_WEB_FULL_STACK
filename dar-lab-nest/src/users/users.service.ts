import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './User';
//Запросы к базе
@Injectable()
export class UserService {
    constructor( 
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) {}
    getAll(): Promise<User[]>{
        return this.usersRepository.find();
    }
    getOne(id:number): Promise<User[]>{
        return this.usersRepository.find({
            select: ["firstName","lastName"],
            where: [{"id":id}]
        });
    }
    updateUser(user:User){
        this.usersRepository.save(user);
    }
    deleteUser(id:number){
        this.usersRepository.delete(id);
    }

}