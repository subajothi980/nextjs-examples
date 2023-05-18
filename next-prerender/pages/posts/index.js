import Post from "components/Post";
import Link from 'next/link';
import { useState } from "react";

const displayLimit = 15;

export default function Postlist({posts}){
    let [showPost, setShowPost] = useState(displayLimit);
    
    console.log("posts ", posts)
    return <>
    <Link href="/">Back to Home</Link>
    <h2>Post List {showPost}</h2>
    <button onClick={()=> {
        setShowPost(showPost + displayLimit)
    }}>Show next {displayLimit}</button>
        {posts.slice(0, showPost).map(post => {
        return (<div key={post.id}>
            <Post post={post} />  
            </div>);
        })}


    </>
}



export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
      props:{
        //posts : data.slice(0,15)
        posts : data
      }
    }
  } 
  