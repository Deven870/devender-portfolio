
function GithubStats() {
  const username = 'Deven870' // Your actual GitHub username

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            GitHub Statistics
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Stats Card */}
          <div className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1f3a&title_color=667eea&icon_color=667eea&text_color=e0e7ff`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </div>
          
          {/* Top Languages Card */}
          <div className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1f3a&title_color=667eea&text_color=e0e7ff`}
              alt="Top Languages"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        {/* GitHub Streak Stats */}
        <div className="mt-8 flex justify-center">
          <div className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 w-full max-w-3xl">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=1a1f3a&ring=667eea&fire=f093fb&currStreakLabel=667eea`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* GitHub Activity Graph */}
        <div className="mt-8">
          <div className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300">
            <img 
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=1a1f3a&color=667eea&line=667eea&point=f093fb`}
              alt="GitHub Activity Graph"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubStats
