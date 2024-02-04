'use client'

import { Button, Input } from "@material-tailwind/react"

import React, { useState } from 'react'

const DeleteUser = () => {
    const [id, setId] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!id) {
            alert('please provide brother id')
            return
        }
        try {
            const response = await fetch(`/api/users/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('brother has been deleted')
                setId('')
            } else {
                const data = await response.json()
                alert(data.result || "something went wrong bro")
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <Input
                    label="User ID"
                    type="text"
                    placeholder="User ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <Button
                    className="mt-2"
                    type="submit"
                >
                    Delete User
                </Button>
            </form>
        </div>
    )
}

export default DeleteUser