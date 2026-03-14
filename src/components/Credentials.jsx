import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Credentials() {
  const [ref, isVisible] = useScrollAnimation()

  const education = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'IILM University',
      period: '2022 - 2026',
      detail: 'Focused on backend systems, machine learning, and core computer science fundamentals.'
    },
    {
      title: 'Senior Secondary (Class XII)',
      institution: 'Kendriya Vidyalaya RK Puram Sec 12',
      period: '2021 - 2022',
      detail: 'Built the academic base for engineering studies and analytical problem solving.'
    },
    {
      title: 'Secondary School (Class X)',
      institution: 'Kendriya Vidyalaya No. 2 Colaba Mumbai',
      period: '2019 - 2020',
      detail: 'Developed consistent academic discipline and a strong interest in technology.'
    }
  ]

  const certifications = [
    'Technology Job Simulation Deloitte (Forage)',
    'Artificial Intelligence Skillsoft (Elite Certificate)',
    'Python Concurrent Programming: Multiprocessing Skillsoft (Elite Certificate)'
  ]

  const credlyProfile = 'https://www.credly.com/users/devender.39723b05/badges'

  const credlyBadges = [
    {
      title: 'Building AI Solutions Using Advanced Algorithms and Open Source Frameworks',
      issuer: 'IBM SkillsBuild',
      issued: 'Jul 17, 2025',
      image: 'https://images.credly.com/images/6079f8a6-0f3b-4fe5-b1db-57460d1c9282/image.png'
    },
    {
      title: 'Fundamentals of Sustainability and Technology',
      issuer: 'IBM SkillsBuild',
      issued: 'Jul 1, 2025',
      image: 'https://images.credly.com/images/cef0e894-8024-4a89-8337-c7ee295aef19/image.png'
    },
    {
      title: 'Project Management Fundamentals',
      issuer: 'IBM SkillsBuild',
      issued: 'Jun 28, 2025',
      image: 'https://images.credly.com/images/a4f13de3-9fc7-4d94-8f31-076999c2d06e/BadgeEmblem_ProjectManagementFundamentals.png'
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      issued: 'Jun 19, 2025',
      image: 'https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png'
    }
  ]

  const achievements = [
    'Filed a patent related to research on machine learning-based stock price prediction algorithms.',
    'Represented at national level in Under-19 Basketball and Badminton.'
  ]

  const interests = [
    'Nature photography',
    'Badminton',
    'Reading technology and self-development books'
  ]

  return (
    <section
      ref={ref}
      id="credentials"
      className={`px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Credentials & Highlights
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Academic background, certifications, and differentiators that support my backend and machine learning work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-bg-card rounded-2xl border border-primary/10 p-6 shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <i className="fas fa-graduation-cap text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <p className="text-sm text-primary mb-1">{item.period}</p>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-purple-300 text-sm mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-card rounded-2xl border border-primary/10 p-6 shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <i className="fas fa-certificate text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((item, index) => (
                <div key={index} className="rounded-xl bg-bg-dark/70 border border-white/5 p-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-emerald-400 mt-1"></i>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Credly Badge Wallet</h4>
                <a
                  href={credlyProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-purple-300 transition-colors"
                >
                  View all badges
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {credlyBadges.map((badge, index) => (
                  <a
                    key={index}
                    href={credlyProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl bg-bg-dark/70 border border-white/5 p-3 hover:border-primary/40 transition-all duration-300"
                    title={`${badge.title} - ${badge.issuer}`}
                  >
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="w-full aspect-square object-contain rounded-lg bg-white/5 p-2 mb-2"
                      loading="lazy"
                    />
                    <p className="text-xs text-gray-300 leading-snug group-hover:text-white transition-colors">
                      {badge.title}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">{badge.issued}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-bg-card rounded-2xl border border-primary/10 p-6 shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                  <i className="fas fa-trophy text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div key={index} className="rounded-xl bg-bg-dark/70 border border-white/5 p-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-star text-pink-400 mt-1"></i>
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg-card rounded-2xl border border-primary/10 p-6 shadow-lg hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-5">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credentials