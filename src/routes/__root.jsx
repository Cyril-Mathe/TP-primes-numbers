import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2 bg-[#990011] text-white">
      <Link to="/" className="[&.active]:font-bold">
        Accueil
      </Link>{' '}
      <Link to="/primes" className="[&.active]:font-bold">
        Primes
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })