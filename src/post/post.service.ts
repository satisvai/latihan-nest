import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {

    async createPost(data: CreatePostDto){
        return {
            statusCode: 200,
            data
        }
    }
}
