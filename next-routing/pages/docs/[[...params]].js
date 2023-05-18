import { useRouter } from "next/router";

function Docs(){
    const router = useRouter();
    const { params=[] } = router.query;

    if(params.length===2){
        return `Viewing docs for feature ${params[0]} and concept ${params[1]}`;
    }else if(params.length===1){
        return `Viewing docs for feature ${params[0]}`;
    }else{
        return `Docs home page`;
    }
    
}

export default Docs;