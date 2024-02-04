'use client'

import { Button, Input } from "@material-tailwind/react";

import React, { useState } from 'react'

const UpdateUser = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUpdate = async (e) => {
        e.preventDefault()

        if (!id) {
            alert("Please provide ID")
            return;
        }
        const requestedData = { id };

        if (name) {
            requestedData.name = name
        }
        if (email) {
            requestedData.email = email
        }
        if (password) {
            requestedData.password = password
        }

        try {
            const response = await fetch('/api/users', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestedData)
            })

            if (response.ok) {
                alert('brother information is updated!')
                clearForm()
            } else {
                const data = await response.json()
                alert(data.result || 'Something went wrong bro')
            }

        } catch (error) {
            alert(error)
            return
        }

    }

    const clearForm = () => {
        setId('')
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <Input
                    label="ID"
                    type='text'
                    placeholder='ID'
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <Input
                    label="Name"
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    label="Email"
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    className='mt-2'
                    type='submit'
                >
                    Update
                </Button>
            </form>
        </div>
    )
}

export default UpdateUser