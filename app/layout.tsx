import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inventory Forecaster — Predict Stock Needs Before They Run Out',
  description: 'Analyze sales history and seasonal patterns to predict inventory requirements and prevent stockouts during peak periods.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a7d7778b-ff95-44e2-9fc3-9e7be56fa96d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
