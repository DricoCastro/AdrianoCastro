import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt', 'es', 'it'],
  defaultLocale: 'en',
  // Always use the defaultLocale (English) when no locale is in the URL.
  // Disables browser language detection so users always start in English.
  localeDetection: false,
});

export const config = {
  matcher: ['/', '/(pt|en|es|it)/:path*']
};
