export const setJwtCookie = (token: string, daysToExpire: number) => {
  const expirationDate = new Date()
  expirationDate.setTime(expirationDate.getTime() + daysToExpire * 24 * 60 * 60 * 1000)

  const cookieString = `jwt=${encodeURIComponent(
    token,
  )}; expires=${expirationDate.toUTCString()}; path=/`
  document.cookie = cookieString
}

export const getJwtFromCookie = () => {
  const cookies = document.cookie.split(';')
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=')
    if (cookieName === 'jwt') {
      return decodeURIComponent(cookieValue)
    }
  }
  return null
}

export const deleteJwtCookie = () => {
  document.cookie = `jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
