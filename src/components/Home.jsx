import React from 'react'
import MoviesList from './movies/MoviesList'
import TheatreList from './theatre/TheatreList'

export default function Home() {
    return (
        <>
            <MoviesList />
            <TheatreList />
        </>
    )
}
