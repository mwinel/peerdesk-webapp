export const login = async (data: any) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })

  const responseData = await response.json()

  return responseData
}
