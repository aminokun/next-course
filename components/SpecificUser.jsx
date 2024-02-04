'use client'
import React, { useState } from 'react'
import { Button, Card, Input, List, ListItem } from '@material-tailwind/react'


const SpecificUser = () => {
    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState(null)

    const fetchUserData = async () => {
        const response = await fetch(`/api/users/${userId}`)

        if (response.ok) {
            const res = await response.json()
            setUserData(res.user)
        } else {
            console.log('error fetching data')
            setUserData(null)
        }

    }

    return (
        <div>
            <div className='flex'>
                <div className='w-72'>
                    <Input
                        label='Enter User ID'
                        type='text'
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                    />
                </div>
                <Button
                    className='ml-4'
                    onClick={fetchUserData}> Fetch Brother </Button>
            </div>
            {userData ? (
                userData.map((d) => (
                    <>
                        <Card className='w-96 mt-5'>
                            <List>
                                <ListItem>ID: {d.id}</ListItem>
                                <ListItem>Name: {d.name}</ListItem>
                                <ListItem>Age: {d.age}</ListItem>
                                <ListItem>Email: {d.email}</ListItem>
                                <ListItem>Password: {d.password}</ListItem>
                            </List>
                        </Card>
                    </>
                ))
            ) : (
                <p className='mt-2'>Search For Specific Brother</p>
            )}
        </div>
    )
}

export default SpecificUser