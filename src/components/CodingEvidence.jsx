import { useScrollAnimation } from '../hooks/useScrollAnimation'

function CodingEvidence() {
  const [ref, isVisible] = useScrollAnimation()

  const profiles = [
    {
      name: 'LeetCode',
      handle: 'iYUfTi2frk',
      summary: 'Algorithmic problem-solving practice across data structures, dynamic programming, and interview-style challenges.',
      evidence: 'Public profile demonstrates consistency and coding-round readiness.',
      url: 'https://leetcode.com/u/iYUfTi2frk/',
      icon: 'fas fa-code',
      accent: 'from-amber-400 to-orange-500'
    },
    {
      name: 'HackerRank',
      handle: 'dev2004_rld',
      summary: 'Structured skill-building through platform assessments and topic-based challenges.',
      evidence: 'Verifiable profile with ongoing progress in practical programming tasks.',
      url: 'https://www.hackerrank.com/profile/dev2004_rld',
      icon: 'fas fa-laptop-code',
      accent: 'from-emerald-400 to-teal-500'
    }
  ]

  return (
    <section
      ref={ref}
      id="coding"
      className={`px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Coding Evidence
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Verified competitive coding profiles that back up algorithmic and problem-solving capability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-bg-card rounded-2xl p-7 border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${profile.accent} text-white flex items-center justify-center`}>
                    <i className={`${profile.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                    <p className="text-gray-400 text-sm">@{profile.handle}</p>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-primary/80">Verified</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">{profile.summary}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{profile.evidence}</p>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bg-dark border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
              >
                Verify Profile
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingEvidence