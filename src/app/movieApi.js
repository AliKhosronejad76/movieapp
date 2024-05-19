import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const API_KEY = "cadd11edc0b558cf3fea446486a4972d"

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWRkMTFlZGMwYjU1OGNmM2ZlYTQ0NjQ4NmE0OTcyZCIsInN1YiI6IjYzNDJjYmE0NGYzM2FkMDA3ZmI0YWVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zKM2rkSL8mqGJVqX61VqgzL06SjKsf04k_09fftIfjo"

export const movieApi = createApi({
    reducerPath:"movieApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.themoviedb.org/3/' ,
        headers: {Authorization: `Bearer ${TOKEN}`, accept: 'application/json',},
    }),

    endpoints:(builder)=>({
        getNowPlaying : builder.query({
            query : (pageCount = 1)=> `/movie/now_playing?language=en-US&page=${pageCount}`,
        })
    })
})

export const   {
    useGetNowPlayingQuery ,

} = movieApi