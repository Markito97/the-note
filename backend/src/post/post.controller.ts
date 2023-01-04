import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './schema/createPost.dto';
import { Request, Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/getAll')
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }

  @Post('/create')
  async createPost(@Body() createPostDto: CreatePostDto) {
    return await this.postService.createPost(createPostDto);
  }

  @Get('/:id')
  async getOne(@Req() request: Request) {
    const { id } = request.params;
    return await this.postService.getOne(id);
  }

  @Put('/update')
  async updatePost(@Req() request: Request, @Res() response: Response) {
    const post = request.body;
    if (!post.id) {
      response.status(400).json({ message: 'id не указан' });
    }
    const updatedPost = await this.postService.updatePost(post);
    return response.json(updatedPost);
  }
}
