export const createUser = async (userData: any) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...userData, authProvider: "credentials" }),
  })
  const data = await response.json()
  return data
}

export const getUserByEmail = async (email: string) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/email/${email}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
