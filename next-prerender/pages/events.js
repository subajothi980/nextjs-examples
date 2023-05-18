import { useState } from "react";
import { useRouter } from "next/router";

function eventList({eventList}){
    const [events,setEvents] = useState(eventList);
    const router = useRouter();

    const handleSportevents = async () => {
        const response = await fetch("http://localhost:4000/events?category=sports");
        const data = await response.json();
        setEvents(data);
        router.push("/events?category=sports",undefined,{shallow:true})
    }
    const handleTechevents = async () => {
        const response = await fetch("http://localhost:4000/events?category=technology");
        const data = await response.json();
        setEvents(data);
        router.push("/events?category=technology",undefined,{shallow:true})
    }
    const handleFoodevents = async () => {
        const response = await fetch("http://localhost:4000/events?category=food");
        const data = await response.json();
        setEvents(data);
        router.push("/events?category=food",undefined,{shallow:true})
    }
    return (
        <>
            <button onClick={handleSportevents}>Sports</button>&nbsp;<button onClick={handleTechevents}>Technology</button>&nbsp;<button onClick={handleFoodevents}>Food</button>
            {events.map((event) => {
                return (
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default eventList;

export async function getServerSideProps(context){
    const { query } = context;
    const { category } = query;
    const qryString = category ? "category="+category : ''
    const response = await fetch(`http://localhost:4000/events?${qryString}`);
    const data = await response.json();
    return {
        props:{
            eventList : data
        }
    }
}