import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto } from './schema/createPost.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  async getOne(id: string) {
    const post = await this.postModel.findOne({ id: id });
    return post;
  }

  async getAllPosts() {
    return await this.postModel.find();
  }

  async createPost(createPostDto: CreatePostDto) {
    return this.postModel.create({ ...createPostDto });
  }

  async updatePost(post: any) {
    return await this.postModel.findOneAndUpdate({ _id: post._id }, post, {
      new: true,
    });
  }

  async deletePost(id: string) {
    return await this.postModel.findOneAndDelete({ id: id });
  }
}
