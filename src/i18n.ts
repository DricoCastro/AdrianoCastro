import {getRequestConfig} from 'next-intl/server';

const defaultLocale = 'en';
const locales = ['en', 'pt', 'es', 'it'];

export default getRequestConfig(async ({requestLocale}) => {
  // requestLocale is a Promise<string | undefined> in next-intl v4
  const requested = await requestLocale;

  // Validate and fall back to default if undefined or unsupported
  const locale = requested && locales.includes(requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
