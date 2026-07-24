"use server"
import Payment from "../model/payment"
import User from "../model/user"
import Razorpay from "razorpay"
import mongoose from "mongoose"



export const initiate = async (amount, to_username, paymentFrom, message) => {

    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI)
    }

    let user = await User.findOne({username: to_username})
        const secret = user.razorpaySecret
        const key = user.razorpayID

    const instance = new Razorpay({ key_id: key, key_secret: secret })


    let options = {
        amount: Number.parseInt(amount) * 100,  // amount in the smallest currency unit
        currency: "INR",
    }
    let x = await instance.orders.create(options)



    await Payment.create({ oid: x.id, amount: amount, to_user: to_username, message: message, from_user: paymentFrom })

    return x

}

export const fetchuser = async (username) => {
    await mongoose.connect(process.env.MONGO_URI)

    let user = await User.findOne({ username: username }).lean()

    return JSON.parse(JSON.stringify(user));
}

export const fetchpayments = async (username) => {
    await mongoose.connect(process.env.MONGO_URI)

    let payments = await Payment.find({ to_user: username, done: true }).sort({ updatedAt: -1 }).limit(7).lean()
    return JSON.parse(JSON.stringify(payments));
}

export const updateProfile = async (data, oldusername) => {
    await mongoose.connect(process.env.MONGO_URI)

    let ndata = Object.fromEntries(data)

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }

        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    }

    await User.updateOne({ email: ndata.email }, ndata)

}

