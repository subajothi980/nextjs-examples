import { comments } from "../../data/comments";

export default function displayComment({comment}){
    return (<>
        <div>
            <h1>{comment.id} {comment.text}</h1>
        </div>
    </>)
}

export async function getStaticPaths(){
    return {
        paths:[
            {params : {commentId:'1'}},
            {params : {commentId:'2'}},
            {params : {commentId:'3'}},
            {params : {commentId:'4'}},
            {params : {commentId:'5'}},
            {params : {commentId:'6'}},
            {params : {commentId:'7'}},
            {params : {commentId:'8'}},
            {params : {commentId:'9'}},
            {params : {commentId:'10'}}
        ],
        fallback:false,
    }
}


export async function getStaticProps(context){
    console.log(context)
    const { params } = context;
    const { commentId } = params;

    // Calling our local api inside getStaticProps or getServersideprops is not recommented
    // const response = await fetch(`http://localhost:3000/api/comments/${commentId}`);
    // const data = await response.json();

    const data = comments.find(comment => comment.id===parseInt(commentId));

    return {
        props:{
            comment : data
        }
    }
}