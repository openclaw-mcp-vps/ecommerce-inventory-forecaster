export default function Home() {
  const faqs = [
    {
      q: 'How does the forecasting work?',
      a: 'We apply time-series algorithms to your sales history, detect seasonal patterns, and project future demand so you always know when to reorder.'
    },
    {
      q: 'What data formats are supported?',
      a: 'Upload CSV exports from Shopify, WooCommerce, or any platform. API integrations are also available for real-time sync.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. No contracts, no lock-in. Cancel from your dashboard and you keep access until the end of your billing period.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          E-commerce Inventory Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict inventory needs<br />
          <span className="text-[#58a6ff]">before stockouts happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze your sales history and seasonal patterns to generate accurate inventory forecasts and automated reorder alerts — so you never miss a peak.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Forecasting — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['CSV & API Import', 'Seasonal Pattern Detection', 'Reorder Alerts', 'Stockout Prevention', 'Demand Forecasting'].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to stay stocked</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited SKU forecasting',
              'CSV upload & API sync',
              'Seasonal trend analysis',
              'Automated reorder alerts',
              'Email & webhook notifications',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Inventory Forecaster. All rights reserved.
      </footer>
    </main>
  )
}
