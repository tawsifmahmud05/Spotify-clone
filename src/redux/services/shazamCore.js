import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': '0f9780cbc6msha5b9b04615441b4p17267bjsn46485b2f7ff5',
	  'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

export const shazamCoreApi = createApi({
	reducerpath:'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl:'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: (headers) =>{
			headers.set('X-RapidAPI-Key','0f9780cbc6msha5b9b04615441b4p17267bjsn46485b2f7ff5');

			return headers;
		},
	}),
	endpoints:(builder) =>({
		getTopCharts:builder.query({query: () =>'/charts/world'}),
		getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
		getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
		getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
		getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
		getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    	getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
	}),
});

export const{
	useGetTopChartsQuery,
	useGetSongsByGenreQuery,
	useGetSongsByCountryQuery,
	useGetSongsBySearchQuery,
	useGetArtistDetailsQuery,
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
} = shazamCoreApi;