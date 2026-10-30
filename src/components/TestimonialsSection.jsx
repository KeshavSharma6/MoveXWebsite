import React from 'react'
import clientsData from '../data/clients.json'

/**
 * PLACEHOLDER SLOT: Testimonials / "Trusted by" Section
 * 
 * This component renders ONLY if data exists in src/data/clients.json.
 * Currently clients.json is empty ([]), so this component returns null.
 * 
 * To display testimonials, add client objects to src/data/clients.json with:
 * [
 *   {
 *     "name": "Client Name",
 *     "role": "Founder / CEO",
 *     "company": "Company Name",
 *     "quote": "Quote about MoveXlabs...",
 *     "logo": "/path-or-url-to-logo.svg"
 *   }
 * ]
 */
export default function TestimonialsSection() {
  if (!clientsData || !Array.isArray(clientsData) || clientsData.length === 0) {
    return null
  }

  return (
    <section id="clients" className="relative py-16 md:py-24 px-6 border-b border-[color:var(--line)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trusted by fast-moving founders.</h2>
          <p className="text-[color:var(--muted)] text-base md:text-lg max-w-xl mx-auto">Real apps shipped to production on iOS and Android.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {clientsData.map((client, idx) => (
            <div key={idx} className="glass rounded-2xl p-6 flex flex-col justify-between">
              {client.quote && (
                <p className="text-[color:var(--muted)] text-base leading-relaxed mb-6 italic">
                  "{client.quote}"
                </p>
              )}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[color:var(--line)]">
                {client.logo && (
                  <img src={client.logo} alt={client.company || client.name} className="w-10 h-10 object-contain rounded" />
                )}
                <div>
                  <div className="font-semibold text-white text-sm">{client.name}</div>
                  <div className="text-xs text-[color:var(--muted)]">{client.role}{client.company ? ` · ${client.company}` : ''}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
