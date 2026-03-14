import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Contact() {
  const [ref, isVisible] = useScrollAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState({ type: '', message: '' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)
      setSubmitState({ type: '', message: '' })

      const payload = new FormData()
      payload.append('name', formData.name)
      payload.append('email', formData.email)
      payload.append('message', formData.message)
      payload.append('_subject', `Portfolio message from ${formData.name}`)
      payload.append('_captcha', 'false')
      payload.append('_template', 'table')

      const response = await fetch('https://formsubmit.co/ajax/dev2004.rld@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: payload
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitState({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: 'Message could not be sent right now. Please use the direct email link below.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="text-center mb-8 text-gray-300 space-y-1">
          <p>Greater Noida, India</p>
          <p>
            Email: <a href="mailto:dev2004.rld@gmail.com" className="hover:text-primary transition-colors duration-200">dev2004.rld@gmail.com</a>
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com/Deven870"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-bg-card border border-gray-700 hover:border-primary rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 group"
          >
            <i className="fab fa-github text-gray-400 group-hover:text-primary"></i>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/devender-b39447255/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-bg-card border border-gray-700 hover:border-primary rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 group"
          >
            <i className="fab fa-linkedin text-gray-400 group-hover:text-primary"></i>
          </a>
          
          <a 
            href="mailto:dev2004.rld@gmail.com"
            className="w-14 h-14 bg-bg-card border border-gray-700 hover:border-primary rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 group"
          >
            <i className="fas fa-envelope text-gray-400 group-hover:text-primary"></i>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-bg-card p-8 rounded-xl border border-gray-700">
          <div className="mb-6 rounded-xl border border-primary/10 bg-bg-dark/70 p-4 text-sm text-gray-400">
            Use the form for direct outreach, or email me if you prefer a faster response channel.
          </div>

          {submitState.message ? (
            <div
              className={`mb-6 rounded-xl border p-4 text-sm ${
                submitState.type === 'success'
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                  : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
              }`}
            >
              {submitState.message}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-dark border border-gray-700 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-200 transition-all"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-dark border border-gray-700 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-200 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-bg-dark border border-gray-700 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-200 transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400">
          <p className="mb-2">
            <a href="mailto:dev2004.rld@gmail.com" className="hover:text-primary transition-colors duration-200">dev2004.rld@gmail.com</a>
          </p>
          <p className="text-sm">© 2026 Devender. Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
