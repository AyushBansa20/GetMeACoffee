import React from 'react'
import PaymentPage from '../component/paymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import user from '../model/user'



const Username = async ({ params }) => {
    const { username } = await params

    const checkuser = async () => {
        await connectDb()
        let a = await user.findOne({ username: username })
        if (!a) {
            return notFound()
        }
    }
    await checkuser()

    return (
        <>
            <PaymentPage username={username} />
        </>
    )
}

export default Username
