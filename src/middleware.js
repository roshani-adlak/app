
import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';
import { cookies } from 'next/headers';




export function middleware(req) {
    var isAuthenticated = req.cookies.get('authtoken')?.value;
    if (!isAuthenticated) {
        if(req.nextUrl.pathname!=='/login'){
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
    if(isAuthenticated){
        if(req.nextUrl.pathname==='/login'||req.nextUrl.pathname==='/reset_password'){
            return NextResponse.redirect(new URL('/', req.url))
        }
        NextResponse.next();
    }


    return NextResponse.next();
  }



export const config = {
    matcher: ['/admin/:path*','/login']
};