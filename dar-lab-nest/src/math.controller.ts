import { Controller, Get, Param } from '@nestjs/common';

@Controller('math')
export class MathController{
    @Get()
    getMultiplication(@Param() params): number {
        console.log(params);
        
        return 2*2;
    }
}