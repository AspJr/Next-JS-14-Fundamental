'use client'

import CardList from '../components/Posts/CardList'
import ViewUserButon from '../components/Posts/ViewUserButton'
import React from 'react'
import styles from "./postPage.module.css" 

const base_url = "https://jsonplaceholder.typicode.com/posts";
const Posts = async() => {
  
  interface IPosts{
    userId: number,
    id: number,
    title: string,
    body: string
  }

  const response =  await fetch (base_url,{
    //Fetch ulang ke tika page di reload user/client
    //ini berlaku untuk page yang di beri sintaks ini saja -- Tidak berlaku/aktif di page lain 
    //ini namanya dinamis rendering (realtime)
    //kalo tanpa sintak ini namanya static rendering (tidak realtime)
    //gambar o saat di npm run build menunjukan static, tapi gambar kaya segitiga (mirip lambda katanya) 
    //--> menunjukkan ini dinamis rendering
    cache: "no-store", 

    // next: {revalidate: 3600}//Kalo yang ini kaya cron job / model scheduler
  })
  const posts: IPosts[] = await response.json()

  return (
    <>
        <h1 className='text-fuchsia-500'>POSTING PAGE</h1>
        {/* Mapping dari interface ke cardlist */}
        {posts.map((post) => {
          return (
            <CardList key={post.id}>
              <p>{post.id}</p>
              <i>{post.title}</i>
              <p>{post.body}</p>
              <ViewUserButon userId = {post.userId}/>
            </CardList>
          )
        })}

    </>
  )
}

export default Posts