import React from 'react'
import teamData from '../data/team.json'

/**
 * PLACEHOLDER SLOT: Team / Founder Block
 * 
 * This component renders ONLY if photo, bio, and name are provided in src/data/team.json.
 * Currently team.json has empty strings, so this component returns null.
 * 
 * To display the team/founder block, update src/data/team.json with:
 * {
 *   "name": "Founder Name",
 *   "role": "Founder & Lead Engineer",
 *   "bio": "Short personal bio about building apps...",
 *   "photo": "/path-or-url-to-photo.jpg",
 *   "social": "https://twitter.com/..."
 * }
 */
export default function TeamSection() {
  if (!teamData || !teamData.name || !teamData.bio || !teamData.photo) {
    return null
  }

  return (
    <section id="team" className="relative py-16 md:py-24 px-6 border-b border-[color:var(--line)]">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src={teamData.photo}
            alt={teamData.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border border-[color:var(--line)] flex-shrink-0"
          />
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--fire-1)] mb-2 font-mono">
              {teamData.role || 'Studio Lead'}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{teamData.name}</h3>
            <p className="text-[color:var(--muted)] text-base md:text-lg leading-relaxed mb-4">
              {teamData.bio}
            </p>
            {teamData.social && (
              <a
                href={teamData.social}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white hover:text-[color:var(--fire-1)] transition"
              >
                Connect <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
