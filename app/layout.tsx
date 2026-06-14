import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timezone Optimizer — Find Optimal Meeting Times for Remote Teams',
  description: 'Calculates best meeting slots considering team timezones, working hours, and productivity patterns. Perfect for remote team managers coordinating 5+ people across timezones.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c5126ea-e64e-4d2a-9c78-f33fff85f3d8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
