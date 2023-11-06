import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { task } from './data/task';

@Injectable()
export class TaskService {

    async createtask(data: CreateTaskDto){
        return {
            statusCode: 200,
            data
        }
    }

    async getAllTask(){
        return {
            statusCode: 200,
            data: task
        }
    }
}
