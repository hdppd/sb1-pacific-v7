import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="content-container py-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold mr-4">The Pacific</Link>
            <span className="text-muted-foreground">|</span>
            <span className="ml-4 text-sm text-muted-foreground">Navigating Global Currents</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Subscribe</Button>
            <ModeToggle />
          </div>
        </div>
        <nav className="flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><Link href="/latest" className="text-sm font-medium hover:text-primary">LATEST</Link></li>
            <li><Link href="/economics" className="text-sm font-medium hover:text-primary">ECONOMICS</Link></li>
            <li><Link href="/politics" className="text-sm font-medium hover:text-primary">POLITICS</Link></li>
            <li><Link href="/sustainability" className="text-sm font-medium hover:text-primary">SUSTAINABILITY</Link></li>
            <li><Link href="/technology" className="text-sm font-medium hover:text-primary">TECHNOLOGY</Link></li>
            <li><Link href="/culture" className="text-sm font-medium hover:text-primary">CULTURE</Link></li>
          </ul>
          <div>
            <input type="text" placeholder="Search..." className="px-3 py-1 border rounded-md text-sm" />
          </div>
        </nav>
      </div>
    </header>
  );
}