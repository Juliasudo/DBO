import Link from 'next/link'
import { GithubIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-light-card dark:bg-dark-card">
      <div className="container mx-auto flex flex-col items-center">
        <Link href="https://github.com/your-repo/zeus" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-lg hover:text-brand-blue transition-colors">
          <GithubIcon className="w-6 h-6" />
          <span>View on GitHub</span>
        </Link>
        <p className="text-sm mt-4 text-gray-500">
          &copy; {new Date().getFullYear()} Zeus. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
