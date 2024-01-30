'use client'
import React, { useState } from 'react'


const AddNewUser = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const addNewUserHandler = async () => {
        let response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({ name, age, email })
        })

        response = await response.json()
        if (response.ok) {
            alert('bro is toegevoegd man')
        } else {
            alert('bro is niet toegevoegd man')
        }
    }
    return (
        <div>
            <input
                className='mb-2 text-black'
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder='wat is je naam bro'
            />
            <br />
            <input
                className='mb-2 text-black'
                type="number"
                onChange={e => setAge(e.target.value)}
                value={age}
                placeholder='wat is je age bro'
            />
            <br />
            <input
                className='mb-2 text-black'
                type="text"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder='wat is je email bro'
            />
            <br />

            <button
                className='bg-blue text-white border p-2'
                onClick={addNewUserHandler}> voeg een nieuwe bro toe </button>

        </div>
    )
}


export default AddNewUser