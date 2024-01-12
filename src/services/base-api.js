import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        credentials: 'include',
    }),
    endpoints: builder => {
        return {
            getPosts: builder.query({
                query: (start) => ({
                    url: '/posts',
                    params:
                        {
                            _limit: 100,
                            _start: start,
                        }
                })

            }),
            fetchPostById: builder.query({
                query: (id) => ({
                    url: `/posts/${id}`,
                })
            })
        }
    },
})

export const {useGetPostsQuery, useFetchPostByIdQuery} = baseApi