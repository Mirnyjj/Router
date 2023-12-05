import { useEffect, useState } from 'react'

export function useDebounce(seachText) {

  const [debouncedValue, setDebouncedValue] = useState(seachText)

  useEffect(() => {

    const timer = setTimeout(() => setDebouncedValue(seachText), 2000)

    return () => {

      clearTimeout(timer)

    }

  }, [seachText])

  return debouncedValue

}