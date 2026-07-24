import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import mongoose from 'mongoose';
import User from '../../../model/user'
import connectDb from '@/db/connectDb'


export const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      if (account.provider == "google") {
        //connect to the db
        const client = await mongoose.connect(process.env.MONGO_URI)
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          //create a new user
          const newUser = new User({
            email: user.email,
            name: profile.name,
            username: user.email.split("@")[0],
          })
          await newUser.save();
          user.name = newUser.username;
          
        }

        else {
          user.name = currentUser.username;
          
        }


        return true
      }
    },

    async session({ session }) {
      // Keep session.user.name in sync with latest username from DB
      await connectDb()
      const dbUser = await User.findOne({ email: session.user.email })
      if (dbUser) {
        session.user.name = dbUser.username
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }