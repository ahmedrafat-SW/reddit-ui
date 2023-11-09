export interface PostModel{
    id: number;
    postName: string;
    url: string;
    description: string;
    username: string;
    subredditName: string;
    commentCount: number;
    voteCount: number;
    duration: string;
    upVote: boolean;
    downVote: boolean;
}