'use client'
import React, { useEffect, useState } from 'react'
import { fetchuser, updateProfile } from '../actions/userActions'
import { useSession } from 'next-auth/react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const Page = () => {

  const { data: session, update, status } = useSession();


  // Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    coverpic: "",
    profilepic: "",
    razorpayID: "",
    razorpaySecret: "",
  })

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const getData = async () => {
    let a = await fetchuser(session.user.name)
    if (a) setForm(a)  // null guard — crash prevent
  }

  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return          // session load hone do
    if (status === "unauthenticated") router.push('/login')  // login pe bhejo
    if (session) getData()
  }, [session, status])

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name)
    await update()   // refresh session → session.user.name = new username
    Swal.fire({
      icon: "success",
      title: "Success",
      position: 'top-start',
      text: "Profile updated successfully!",
      width: "min(90vw, 480px)",
      padding: "1em",
      background: "0",
      color:"white",
      timer: 2000,
    });
  }

  return (
    <section className="max-w-2xl mx-4 sm:mx-auto my-4 sm:my-6 md:my-8 bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 border border-gray-700/60">



      {/* Heading */}
      <h1 className="text-2xl text-center font-bold mb-6">
        Welcome to Dashboard
      </h1>


      <form className="space-y-4" action={handleSubmit} >

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-gray-300 font-medium text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-300 font-medium text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-gray-300 font-medium text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Cover Picture URL */}
        <div className="flex flex-col gap-1">
          <label htmlFor="Coverpic" className="text-gray-300 font-medium text-sm">
            Cover Picture URL
          </label>
          <input
            type="text"
            id="coverpic"
            name="coverpic"
            value={form.coverpic}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Profile Picture URL */}
        <div className="flex flex-col gap-1">
          <label htmlFor="profilepic" className="text-gray-300 font-medium text-sm">
            Profile Picture URL
          </label>
          <input
            type="text"
            id="profilepic"
            name="profilepic"
            value={form.profilepic}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Razorpay Key ID */}
        <div className="flex flex-col gap-1">
          <label htmlFor="razorpayid" className="text-gray-300 font-medium text-sm">
            Razorpay Key ID
          </label>
          <input
            type="text"
            id="razorpayid"
            name="razorpayID"
            value={form.razorpayID}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Razorpay Key Secret */}
        <div className="flex flex-col gap-1">
          <label htmlFor="razorpaySecret" className="text-gray-300 font-medium text-sm">
            Razorpay Key Secret
          </label>
          <input
            type="text"
            id="razorpaysecret"
            name="razorpaySecret"
            value={form.razorpaySecret}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Save Button */}
        <button

          type="submit"
          className="mt-2 w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold"
        >
          Save
        </button>

      </form>
    </section>
  )
}

export default Page