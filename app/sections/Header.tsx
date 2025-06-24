import Link from 'next/link'
import { ThemeToggle } from '../components/ThemeToggle'
import { GithubIcon } from 'lucide-react' // npm install lucide-react

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-transparent backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-white">Zeus</h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link href="https://github.com/your-repo/zeus" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="w-6 h-6 text-white hover:opacity-80 transition-opacity" />
        </Link>
      </div>
    </header>
  )
}

export default Header
