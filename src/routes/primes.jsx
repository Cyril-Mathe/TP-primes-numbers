import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/primes')({
  component: Primes,
})

function Primes() {
  return <div className="p-2">Hello from Primes!</div>
}