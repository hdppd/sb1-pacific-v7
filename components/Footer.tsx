import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-12">
      <div className="content-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About The Pacific</h3>
            <p className="text-sm">Providing deep insights into global affairs, current events, and policies impacting the Pacific region and beyond.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/topics">Topics</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The Pacific. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}