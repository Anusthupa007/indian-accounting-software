// Completely isolated not-found page that doesn't use any layout or session
export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 - Page Not Found | Indian Accounting Software</title>
        <style>
          {`
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background-color: #f9fafb;
              margin: 0;
              padding: 0;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .container {
              text-align: center;
              padding: 2rem;
              max-width: 500px;
            }
            h1 {
              font-size: 3rem;
              font-weight: 700;
              color: #111827;
              margin-bottom: 1rem;
            }
            h2 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #374151;
              margin-bottom: 1.5rem;
            }
            p {
              color: #6b7280;
              margin-bottom: 2rem;
              font-size: 1.125rem;
            }
            a {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 0.75rem 1.5rem;
              background-color: #2563eb;
              color: white;
              border-radius: 0.5rem;
              text-decoration: none;
              font-weight: 500;
              transition: background-color 0.2s;
            }
            a:hover {
              background-color: #1d4ed8;
            }
            svg {
              margin-left: 0.5rem;
              width: 1rem;
              height: 1rem;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <a href="/">
            Return to Home
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}