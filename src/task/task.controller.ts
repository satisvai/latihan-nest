import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}
    
    @Post()
    async createTask(@Body() body: CreateTaskDto){
        return await this.taskService.createtask(body);
    }

    @Get()
    async getAllTask(){
        return await this.taskService.getAllTask()
    }
}
