'use client'
import React from 'react'

const User = ({ params }) => {
  return (
    <div>
      <h1>
        Info about {params.user}
      </h1>
    </div>
  )
}

export default User