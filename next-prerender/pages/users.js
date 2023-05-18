import User from "components/User";
import Link from 'next/link';
export default function Userslist({users}){

    return <>
    <Link href="/"><a>Back to Home</a></Link>
    <h2>Users List</h2>
      {/* <pre>
          {JSON.stringify(users, null, 4)}
      </pre> */}
        {users.map(user => {
        return (<div key={user.id}>
            <User user={user} />  
            </div>);
        })}
    </>
}



export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    //console.log(data);
    return {
      props:{
        users : data
      }
    }
  } 
  