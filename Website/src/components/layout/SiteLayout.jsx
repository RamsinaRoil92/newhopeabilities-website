import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { SkipLink } from './SkipLink'

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-on-background">
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1 pt-20" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}