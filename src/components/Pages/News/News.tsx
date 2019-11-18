import * as React from 'react'
import { useState, useEffect } from 'react'

// services
import * as Service from '../../../services/jsonplaceholder/jsonplaceholder'

// utils
import { awaitTo } from '../../../utils/operators/await-to'

interface INewsGetData {
    userId: number
    id: number
    title: string
    body: string
}

const NewsPage = () => {

    const [ posts, setPosts ] = useState([] as Array<INewsGetData>)

    const fetchPosts = async () => {
        const [error, posts] = await awaitTo(Service.placeholderService.getPosts())
        if( error ) return
        return posts
    }
    return (
        <>
            <main>
                <h1>Aktualności</h1>
                {
                    posts.map((item, index:number) => ( 
                            <div>{item.title}</div> 
                    ))
                }
            </main>
        </>
    )
}

export default NewsPage