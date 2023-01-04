import { Model } from 'mongoose';
import { Post, PostDocument } from './schema/post.schema';
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<PostDocument>);
    getAllPosts: () => Promise<(import("mongoose").Document<unknown, any, Post> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getPost: (id: string) => Promise<import("mongoose").Document<unknown, any, Post> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
