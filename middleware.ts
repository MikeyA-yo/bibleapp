import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log(cookies().getAll())
  if(cookies().get("next-auth.session-token")){
    return NextResponse.next();
  }else{
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }
  // const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  // console.log(token, process.env.NEXTAUTH_SECRET)
  // const response = NextResponse.next()
  // const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  // const session = await getServerSession({req:request, res:response, ...options})
  // console.log(token)
  // if(!token){
  //   return NextResponse.redirect(new URL('/signup', request.url))
  // }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}