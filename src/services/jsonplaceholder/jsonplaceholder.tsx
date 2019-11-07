import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = () => {
  return axios(URL_POSTS) as AxiosPromise<Array<INewsGetData>>
}

export const placeholderService = {
  getPosts
}

interface INewsGetData {
    userId: number
    id: number
    title: string
    body: string
}