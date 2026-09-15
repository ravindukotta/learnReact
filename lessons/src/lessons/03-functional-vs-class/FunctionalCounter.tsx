import { useEffect, useState } from 'react'

export default function FunctionalCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('functional mounted')
  }, [])

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  )
}
