import React,{useContext, useEffect, useState} from 'react';
import {Apicontext} from "../../contextApi/Apicontext" 
import MovieCard from './MovieCard';

export default function MoviesList() {
    const { movies } = useContext(Apicontext);
    const [viewMore, setViewMore] = useState(false);
    const [moviesData, setMoviesData] = useState([])
    const [genre, setGenre] = useState();
    const [sort, setSort] = useState();

    const genreHandle = (e) =>{
        setGenre(e.target.value);
        let filterData = movies?.filter((movie)=>{
            return movie.tags.split(",").find((x)=>x === e.target.value);
        })
        setMoviesData(filterData.length ? filterData : movies)
    }

    const sortHandle = (e) =>{
        setSort(e.target.value);
        let sortDate = moviesData?.sort((a, b) => new Date(a[e.target.value]) - new Date(b[e.target.value]));   
        setMoviesData(sortDate)
    }

    useEffect(() => {
        setMoviesData(movies);
    }, [movies])

    return (
        <div className="movieList">
            <div className="headList">
                <h2 className="title">Recommended Movies</h2>
                <div className="filterList">
                <select 
                    value={genre} 
                    onChange={(e)=>genreHandle(e)}
                >
                    <option value="">Genre</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Romance">Romance</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Family">Family</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Biography">Biography</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Crime">Crime</option>
                    <option value="Musical">Musical</option>
                </select>
                
                <select
                    value={sort}
                    onChange={(e)=>sortHandle(e)}
                >
                    <option value="">Sort By</option>
                    <option value="release_date">Date</option>
                    <option value="imdb_rating">Rating</option>
                </select> 
                </div>
            </div>
            <div className="cardList">
                <MovieCard movies={viewMore ? moviesData : moviesData?.slice(0,8)} />
            </div>
            <button className="view_more" onClick={()=>setViewMore(!viewMore)}>
                {viewMore ? 'View Less' : 'View More'}
            </button>
        </div>
    )
}
