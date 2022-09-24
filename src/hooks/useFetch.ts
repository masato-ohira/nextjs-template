import { useState, useEffect } from 'react'
import sleep from 'sleep-promise'

function useFetch(url: string, config: {}) {
  const [isLoading, setIsLoading]: [boolean, Function] = useState(true)
  const [error, setError]: [any, Function] = useState(null)
  const [data, setData]: [any, Function] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, config)
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchData()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, isLoading, error }
}

export default useFetch
