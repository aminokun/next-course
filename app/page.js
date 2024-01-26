"use client"

import React from 'react'
import {useRouter} from "next/navigation"

const Home = () => {

  const router = useRouter()

  const navigate = (page) => {
    router.push(page)
  }

  return (
    <section>
      <h1>useRouter</h1>
      <button onClick={() => navigate('register')} className="border px-2 py-4">
        go to register page bro
      </button>
            <button onClick={() => navigate('login')} className="border px-2 py-4">
        go to login page bro
      </button>
    </section>
  )
}

export default Home