export const topFunction = () => {
  // @ts-ignore
  document.body.scrollTop = 0
  // @ts-ignore
  document.documentElement.scrollTop = 0
}


export const getLocale = () => {
  return localStorage.getItem('locale');
}

export const setLocale = (locale: string) => {
  return localStorage.setItem('locale', locale);
}
