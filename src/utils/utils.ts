export const cookiesToObj = (cookies: string) =>
  cookies.split(';').reduce((obj, str, i) => {
    const cookiesItem = str.trim().split('=');
    obj[cookiesItem[0]] = cookiesItem[1];
    return obj;
  }, {});
