import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-surface/50 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        <p className="font-mono text-sm text-gray-500">
          Designed & Built by Hammad Arshad <br/>
          <span className="mt-1 block text-xs">Based on modern React architecture.</span>
        </p>
        <a href="/admin" className="font-mono text-xs text-primary/70 hover:text-primary transition-colors mt-4">
          [ Admin Log In ]
        </a>
      </div>
    </footer>
  );
}
