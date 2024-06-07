import { Account, NextAuthOptions, Profile, Session, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { AdapterUser } from "next-auth/adapters";
import { clPromise } from "../../mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { JWT } from "next-auth/jwt";
import bcrypt from "bcrypt";
export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_CLIENTSECRET as string,
    }),
    // I'm leaving out credentials for now
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email: ",
    //       type: "email",
    //     },
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "Your Username",
    //     },
    //     password: {
    //       label: "Password: ",
    //       type: "password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either a object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     // You can also use the `req` object to obtain additional parameters
    //     // (i.e., the request IP address)
    //    const client = await clPromise
    //     const db = client.db("BibleApp");
    //     const col = db.collection("Users");
    //     const findUser = await col.findOne({ email: credentials?.email });
    //     const match = await bcrypt.compare(
    //       credentials?.password as string,
    //       findUser?.passwordHash as string
    //     );
    //     console.log(findUser);
    //     if(match){
    //       return {
    //         id:findUser?._id + '',
    //         email: findUser?.email,
    //         name:findUser?.username
    //       }
    //     }
    //     // If no error and we have user data, return it
    //     // if (res.ok && user) {
    //     //   return {id:user._id, email:user.email};
    //     // }
    //     // // Return null if user data could not be retrieved
    //     return null;
    //   },
    // }),
  ],
  adapter:MongoDBAdapter(clPromise) ,
  session: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
      credentials,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile;
      email?: { verificationRequest?: boolean | undefined } | undefined;
      credentials?: Record<string, unknown>;
    }) {
      return true;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (token) {
         if(session.user){
          session.user.email = token.email as string;
         } // Ensure token.id is a string
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to a specific URL after sign-in
      return baseUrl + '/dashboard'; // Change '/dashboard' to your desired path
    }
  },
  //    pages:{
  //     signIn:"/signup"
  //    }
};
