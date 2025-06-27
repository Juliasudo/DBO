import Link from 'next/link';
import { ThemeToggle } from '../components/ThemeToggle';
import { Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-transparent backdrop-blur-sm">
      <Link href="/" className="text-2xl font-bold font-display text-white">Zeus</Link>
      <nav className="flex items-center space-x-6 text-sm">
        <ThemeToggle />
        <Link href="https://github.com/your-repo/zeus" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-white hover:opacity-80 transition-opacity" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
