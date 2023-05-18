export default function newslist({data}){
    return (<><div className="newslist">
                {data}
                <h2>GOOGLE_ANALYTICS_ID</h2>
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
            </div></>)
}

export async function getStaticProps(context){
    console.log(context.previewData);
    console.log(`Connecting to the database with user ${process.env.DB_USER} and password ${process.env.DB_PWD}`);
    return {
        props : {
            data : context.preview ? "List of draft articles" : "List of News Articles"
        }
    }
}