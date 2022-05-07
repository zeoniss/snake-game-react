import { useEffect, useRef } from "react"

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  //Запам’ятайє останній зворотний виклик, якщо він змінився
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  //Налаштовує інтервал.
  useEffect(() => {
    // Не планує, якщо не вказано затримку.
    if (delay === null) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
