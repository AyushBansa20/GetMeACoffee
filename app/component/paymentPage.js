"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import profile from "../assets/profile.svg"
import { initiate } from "../actions/userActions"
import { fetchuser, fetchpayments } from "../actions/userActions"
import Swal from 'sweetalert2'
import { useSearchParams, useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {

    const [paymentForm, setpaymentForm] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const [currentUser, setcurrentUser] = useState({})
    const [currentPayment, setCurrentPayment] = useState([])

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)

        let dbPayments = await fetchpayments(username)
        setCurrentPayment(dbPayments)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setpaymentForm({
            ...paymentForm,
            [e.target.name]: e.target.value
        })
    }

    const Pay = async (amount) => {
        let a = await initiate(amount, username, paymentForm.name, paymentForm.message)
        let orderID = a.id
        var options = {
            "key": currentUser.razorpayID,
            "amount": amount,
            "currency": "INR",
            "name": "Get Me a",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderID,
            "callback_url": `${window.location.origin}/api/razorpay`,
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options)
        rzp1.open();
    }

    const router = useRouter()
    const searchParams = useSearchParams()
    useEffect(() => {
        if (searchParams.get("success")) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment Successful! Thank you 🎉",
                showConfirmButton: false,
                timer: 1500,
                width: "min(90vw, 480px)",
                background: "0",
                color: "yellow"
            })
            router.push(`/${username}`)
        }
    }, [searchParams])

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <div>

                {/* cover page*/}
                <img className='w-full h-[38vh] object-cover' src={currentUser.coverpic} alt="cover picture" loading='eager' />
                <div className='w-full flex justify-center relative '>
                    <div className='flex flex-col items-center'>
                        <img className='w-28 h-28 rounded-full border-2 absolute bottom-0 border-white mb-20 object-cover' src={currentUser.profilepic} alt="" />
                        <div className='mt-18'>

                            <h1 className='text-center font-sans text-[20px]'>{currentUser.name}</h1>

                            <p className='text-center font-sans text-[16px] text-slate-400'>Vibing with the music.
                            </p>
                            <p className='text-center font-sans text-[16px] text-slate-400'> {currentPayment.length} payments . 10 songs .
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                </div>

                {/* payment and supporters */}
                <section className='flex flex-col-reverse md:flex-row w-[83.5%] gap-6 md:gap-[1.5%] m-auto my-15'>

                    <div className='w-full md:w-[50%] min-h-[20vw] bg-gray-800 rounded-2xl p-6'>
                        <h2 className='text-[20px] font-semibold'>Supporters</h2>
                        <ul className="text-[16px] space-y-3">
                            {currentPayment.length == 0 && "No payments yet"}

                            {currentPayment.map((payment, index) => {
                                return <li key={index} className="flex gap-3 items-center">
                                    <Image className="w-5" src={profile} alt="profile" />
                                    <span>
                                        {payment.from_user} donated <span className="font-bold">{payment.amount}</span> with a message:
                                        <span className="text-gray-300"> "{payment.message}" ❤️🎸</span>
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>

                    {/* Payment */}
                    <div className='w-full md:w-[50%] min-h-[20vw] bg-gray-800 rounded-2xl p-6'>
                        <h2 className='text-[20px] font-semibold'>Payment</h2>

                        <div className="flex flex-col items-center gap-3 w-full mt-5">
                            <input
                                name='name'
                                type="text"
                                onChange={handleChange}
                                value={paymentForm.name}
                                placeholder="Enter Name"
                                className="w-full px-4 py-1 rounded-lg border border-gray-600 bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            <input
                                name='message'
                                type="text"
                                onChange={handleChange}
                                value={paymentForm.message}
                                placeholder="Enter Message"
                                className="w-full px-4 py-1 rounded-lg border border-gray-600 bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            <input
                                name='amount'
                                type="number"
                                onChange={handleChange}
                                value={paymentForm.amount}
                                placeholder="Enter Amount"
                                className="w-full px-4 py-1 rounded-lg border border-gray-600 bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>

                        <button disabled={paymentForm.name.length < 2 || paymentForm.amount.length < 1}
                            onClick={() => Pay(Number.parseInt(paymentForm.amount))}
                            className="px-3 mt-3 w-full text-[16px] py-1 rounded-md disabled:bg-slate-600 bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer"
                        >
                            Pay
                        </button>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-7">
                            <button
                                disabled={paymentForm.name.length < 2}
                                onClick={() => { Pay(100) }} className="px-2 sm:px-3 disabled:bg-slate-600 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-center text-sm sm:text-base">
                                Pay 100
                            </button>

                            <button
                                disabled={paymentForm.name.length < 2}
                                onClick={() => { Pay(500) }} className="px-2 sm:px-3 py-1 rounded-lg disabled:bg-slate-600 bg-green-600 text-white hover:bg-green-700 transition-colors text-center text-sm sm:text-base">
                                Pay 500
                            </button>

                            <button
                                disabled={paymentForm.name.length < 2}
                                onClick={() => { Pay(1000) }} className="px-2 sm:px-3 py-1 rounded-lg disabled:bg-slate-600 bg-green-600 text-white hover:bg-green-700 transition-colors text-center text-sm sm:text-base">
                                Pay 1000
                            </button>
                        </div>
                    </div>

                </section>
            </div>

        </>
    )
}

export default PaymentPage
