const { NextResponse } = require('next/server');
// import logger from '@/lib/logger/logger.js';

function middleware(request) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get('auth_session')?.value;

  // Log route access, right now gives error -> cannot access path module in edge runtime.
  // logger.info(`[${request.method}] ${pathname} | Authenticated: ${!!session}`);

  const publicPaths = ['/admin', '/admin/register'];

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  if (session && publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/admin/blog-post/addItem', request.url));
  }

  if (!session && pathname.startsWith('/admin') && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

module.exports = middleware;

module.exports.config = {
  matcher: ['/admin/:path*'],
};
