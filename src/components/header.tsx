import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-center gap-4 py-5">
      <img src={igniteLogo} alt="Logotipo do Ignite" className="h-8" />
      <strong className="text-2xl font-bold text-gray-100">Ignite Feed</strong>
    </header>
  )
}
