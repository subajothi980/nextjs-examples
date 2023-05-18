//import Image from 'next/image'
export default function flowersShow(){
    return (<>
            <div>
                {
                ['1','2','3','4','5'].map( (path) =>{
                    return (<div key={path}> <img src={`/${path}.jpg`} alt="Flowers" width="180" height="150" /></div>);
                }
                )
            }
            </div>
    </>)
}