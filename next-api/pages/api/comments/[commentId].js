import { comments } from "../../../data/comments";

export default function handler(req,res){
    if(req.method==='GET'){
        const {commentId} = req.query;
        const comment = comments.find(comment => comment.id===parseInt(commentId));
        return res.status(200).json(comment);
    }else if(req.method==='DELETE'){
        const {commentId} = req.query;
        const deletedComment = comments.find(comment => comment.id===parseInt(commentId));
        const cindex = comments.findIndex(comment => comment.id===parseInt(commentId));
        comments.splice(cindex,1);
        return res.status(200).json(comments);
    }
}