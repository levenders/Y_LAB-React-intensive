interface RequestProps {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
}

interface ResponseProps {
  ok: boolean
  json: () => Promise<any>
}

const mockFetch = async (): Promise<ResponseProps> => {
  return {
    ok: true,
    json: async () => ({ message: 'Вы успешно авторизованы' }),
  }
}

export async function ApiClient({ url, method = 'GET', body }: RequestProps) {
  const params = { url, method, body }

  const response = await mockFetch()

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data ?? 'Неизвестная ошибка')
  }

  return data
}
