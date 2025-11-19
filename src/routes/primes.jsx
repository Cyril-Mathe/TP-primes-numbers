import { createFileRoute } from '@tanstack/react-router'
import PrimesPage from '../pages/PrimesPage'
export const Route = createFileRoute('/primes')({

  component: Primes,
})

function Primes() {
  return <div className="p-2"><PrimesPage/></div>
}