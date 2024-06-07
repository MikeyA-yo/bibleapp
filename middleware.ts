import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // if(cookies().get("next-auth.session-token")){
  //   return NextResponse.next();
  // }else{
  //   return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  // }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}