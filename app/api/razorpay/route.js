import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "../../model/payment";
import connectDb from "@/db/connectDb";
import User from "@/app/model/user";


export const POST = async (req) => {

    await connectDb();
    let body = await req.formData();
    body = Object.fromEntries(body.entries());

    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: false, message: "Order ID not found" });
    }

    //fetching from db

    let user = await User.findOne({username:  p.to_user})
    const secret = user.razorpaySecret

    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)

    if (xx) { 

        const updatePayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true })
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/${updatePayment.to_user}?success=true&payment_id=${body.razorpay_payment_id}&order_id=${body.razorpay_order_id}`)
     }
else{
    return NextResponse.json({ success: false, message: "Payment verification failed" });
}

}
