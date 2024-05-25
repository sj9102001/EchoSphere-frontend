import { NextResponse } from "next/server"
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const cookieObj = request.cookies.get('authToken');
    const cookieHeader = cookieObj ? `${cookieObj.name}=${cookieObj.value}` : undefined;
    if (cookieHeader === undefined) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    const authResponse = await fetch("http://localhost:8080/user/verifyAuth", {
        headers: {
            Cookie: cookieHeader,
        },
    });

    if (authResponse.status === 401) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/feed', '/chat', '/profile']
}