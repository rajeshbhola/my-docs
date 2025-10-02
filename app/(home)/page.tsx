import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Author Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="https://avatars.githubusercontent.com/u/82930824?v=4"
                alt="Author Profile"
                fill
                className="rounded-full object-cover border-4 border-blue-600 shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Rajesh Bhola
              </h1>
              <p className="text-xl sm:text-2xl text-fd-muted-foreground font-medium">
                Full Stack Developer
              </p>
            </div>

            <p className="text-lg text-fd-muted-foreground max-w-2xl">
              Passionate about creating comprehensive documentation and tutorials to help developers learn and grow.
              Specializing in modern web technologies and software engineering best practices.
            </p>

            {/* Skills */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Core Java</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">SpringBoot</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Microservices</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">Kafka</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">Angular</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">SQL</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-2">
              <a href="https://github.com/rajeshbhola" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-fd-secondary hover:bg-fd-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/rajeshbhola1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-fd-secondary hover:bg-fd-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/therajeshbhola" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-fd-secondary hover:bg-fd-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
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

        {/* Featured Projects */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-fd-border bg-fd-card hover:shadow-xl transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Project Name 1</h3>
                  <p className="text-fd-muted-foreground mb-3">
                    A brief description of your amazing project and what problems it solves.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">Tailwind</span>
                  </div>
                  <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-fd-border bg-fd-card hover:shadow-xl transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Project Name 2</h3>
                  <p className="text-fd-muted-foreground mb-3">
                    Another exciting project showcasing your skills and expertise.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">MongoDB</span>
                  </div>
                  <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-fd-border bg-fd-card hover:shadow-xl transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Project Name 3</h3>
                  <p className="text-fd-muted-foreground mb-3">
                    A comprehensive solution demonstrating full-stack capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">Java</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">Spring Boot</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">PostgreSQL</span>
                  </div>
                  <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-fd-border bg-fd-card hover:shadow-xl transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Project Name 4</h3>
                  <p className="text-fd-muted-foreground mb-3">
                    An innovative tool that simplifies complex workflows.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">FastAPI</span>
                    <span className="px-2 py-1 bg-fd-secondary rounded text-xs">Docker</span>
                  </div>
                  <a href="https://github.com/yourusername/project4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
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
