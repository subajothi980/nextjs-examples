import { useState } from "react"

export default function commentsList(){
    const [comments,setComments] = useState([]);
    const [comment,setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('http://localhost:3000/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComment = async () => {
        const response = await fetch('http://localhost:3000/api/comments',{
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        setComments(data);
    }

    const deleteComment = async commentid => {
        const response = await fetch(`http://localhost:3000/api/comments/${commentid}`,{
            method:"DELETE"
        });
        const data = await response.json();
        setComments(data);
    }



    return (<>

            <input type="text" name="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}} />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Fetch Comments</button>

            {
                comments.map(comment=>{
                    return (<div key={comment.id}>
                        <h1>{comment.id} {comment.text}</h1> <button onClick={()=>deleteComment(comment.id)}>Delete</button>
                    </div>)
                })
            }
    </>)
}