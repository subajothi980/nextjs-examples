import { useRouter } from "next/router";

export default function Postdetails({post}){
    const router = useRouter();
    if(router.isFallback){
        return <h2>Loading.....</h2>
    }
    return (<><div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        </div></>)
}

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const paths = data.map(post =>{
        return {
            params : {
                postId :`${post.id}`,
            }
        }
    })
    return {
        /*paths:[{
            params : {postId:'1'},
        },{
            params : {postId:'2'},
        },{
            params : {postId:'3'},
        },{
            params : {postId:'4'},
        },{
            params : {postId:'5'},
        },{
            params : {postId:'6'},
        },{
            params : {postId:'7'},
        },{
            params : {postId:'8'},
        },{
            params : {postId:'9'},
        },{
            params : {postId:'10'},
        },{
            params : {postId:'11'},
        },{
            params : {postId:'12'},
        },{
            params : {postId:'13'},
        },{
            params : {postId:'14'},
        },{
            params : {postId:'15'},
        }],*/
        paths:paths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();
    if(!data.id){
        return {
            notFound : true,
        }
    }
    return {
        props:{
            post : data
        }
    }
}