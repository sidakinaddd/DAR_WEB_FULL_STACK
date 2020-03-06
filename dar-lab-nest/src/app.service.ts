import { Injectable } from '@nestjs/common';
//Запросы к базе
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
