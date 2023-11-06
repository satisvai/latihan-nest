import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
    constructor(private postService: PostService){}

    @Post()
    async createPost(@Body() body: CreatePostDto){
        return await this.postService.createPost(body)
    }
}
