import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Protected routes that require authentication
type ProtectedRoute = {
  path: string
  roles?: string[]
}

const protectedRoutes: ProtectedRoute[] = [
  { path: '/invoice' },
  { path: '/expenses' },
  { path: '/reports' },
  { path: '/tally' },
  { path: '/analytics' }
]

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if this route is protected
  const isProtected = protectedRoutes.some(route => 
    pathname.startsWith(route.path)
  )

  if (isProtected) {
    const token = await getToken({ req: request })

    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL('/auth/login', request.nextUrl.origin)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Check role-based access if specified
    const route = protectedRoutes.find(r => pathname.startsWith(r.path))
    if (route?.roles && !route.roles.includes(token.role as string)) {
      return NextResponse.redirect(new URL('/auth/unauthorized', request.nextUrl.origin))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/invoice/:path*',
    '/expenses/:path*',
    '/reports/:path*',
    '/tally/:path*',
    '/analytics/:path*'
  ]
}