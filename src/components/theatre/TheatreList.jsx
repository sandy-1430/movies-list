import React,{useContext, useEffect, useState} from 'react'
import {Apicontext} from "../../contextApi/Apicontext" 
import TheatreCard from './TheatreCard';

export default function TheatreList() {
    const { theatre } = useContext(Apicontext);
    const [viewMore, setViewMore] = useState(false);
    const [theatreData, setTheatreData] = useState([])

    useEffect(() => {
        setTheatreData(theatre);
    }, [theatre])
    
    return (
        <div className="theatreList">
            <h2 className="title">Recommended Theatres</h2>
            <div className="cardList">
                <TheatreCard  theatres={viewMore ? theatreData : theatreData?.slice(0,8)}/>
            </div>
            <button className="view_more" onClick={()=>setViewMore(!viewMore)}>
                {viewMore ? 'View Less' : 'View More'}
            </button>
        </div>
    )
}
