import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //Ivoked on successful sign in
    async signIn({ profile }) {
      //connect to database
      await connectDB();
      //check if user exists
      const userExsists = await User.findOne({ email: profile.email });
      //if not, create user
      if (!userExsists) {
        //Truncate userName if too long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      //return true to allow sign in
      return true;
    },
    //session callback function that modifies the session object
    async session({ session }) {
      //Get user from Database
      const user = await User.findOne({ email: session.user.email });
      //assign user if from the session
      session.user.id = user._id.toString();
      //return session

      return session;
    },
  },
};
