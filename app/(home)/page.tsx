import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to My Docs
          </h1>
          <p className="text-lg sm:text-xl text-fd-muted-foreground max-w-2xl mx-auto">
            Your comprehensive resource for learning programming concepts, tutorials, and guides
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/docs"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
          >
            Browse Documentation
          </Link>
          
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card/50 hover:bg-fd-card transition-all duration-200 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Guides</h3>
            <p className="text-fd-muted-foreground">
              In-depth tutorials covering everything from basics to advanced concepts
            </p>
          </div>

          <div className="p-6 rounded-lg border border-fd-border bg-fd-card/50 hover:bg-fd-card transition-all duration-200 hover:shadow-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Code Examples</h3>
            <p className="text-fd-muted-foreground">
              Practical examples and real-world code snippets for better understanding
            </p>
          </div>

          <div className="p-6 rounded-lg border border-fd-border bg-fd-card/50 hover:bg-fd-card transition-all duration-200 hover:shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Reference</h3>
            <p className="text-fd-muted-foreground">
              Fast access to commonly used concepts and syntax references
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
