import Head from 'next/head';
function blogdetails({title,desc}){
    return (<>
            <Head>
                <title>{title}</title>
                <meta name="description" value={desc} />
            </Head>
            <div>
                <h2>Article Title</h2>
            </div>
    </>)
}

export default blogdetails;

export function getStaticPaths(){

    return {
        paths:[{
            params : {blogId:'1'}
        }],
        fallback:false
    }
}

export function getStaticProps(){

    return {
        props:{
            title : 'My blog page',
            desc : 'My blog desc'
        }
    }
}