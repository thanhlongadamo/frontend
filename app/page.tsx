'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [health, setHealth] = useState<string>('checking…')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
      .then(r => r.json())
      .then(d => setHealth(JSON.stringify(d)))
      .catch(() => setHealth('unreachable'))
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Frontend</h1>
      <p>Backend /api/health: <code>{health}</code></p>
    </main>
  )
}
