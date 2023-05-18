import Link from 'next/link';
export default function Post({post}){
    return (<>
        <Link href={`/posts/${post.id}`} passHref><p>{post.id}.{post.title}</p></Link>
        <hr />
</>)
}