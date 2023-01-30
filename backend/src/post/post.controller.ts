import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './schema/createPost.dto';
import { Request, Response } from 'express';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/getAll')
  async getAllPosts(@Req() request: Request) {
    return await this.postService.getAllPosts();
  }

  @Post('/create')
  async createPost(
    @Req() request: Request,
    @Res() response: Response,
    @Body() createPostDto: CreatePostDto,
  ) {
    const post = await this.postService.createPost(createPostDto);
    return response.json(post);
  }

  @Get('/:id')
  async getOne(@Req() request: Request) {
    const { id } = request.params;
    return await this.postService.getOne(id);
  }

  @Put('/:id')
  async updatePost(@Req() request: Request, @Res() response: Response) {
    const post = request.body;
    return await this.postService.updatePost(post);
  }

  @Delete('/:id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
