import { redirect } from 'next/navigation'
import React from 'react'

const ID = ({ params }) => {
    if (params.id == 3) {
      redirect('/login')
  }
  
    return (
      <div>ID: {params.id}</div>
  )
}

export default ID
