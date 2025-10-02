import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Github,
  Twitter,
  CheckCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Betreff ist erforderlich'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    
    // Show success message
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-Mail',
      content: 'info@iman-cloud.net',
      link: 'mailto:info@iman-cloud.net',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      content: '+49 123 456 7890',
      link: 'tel:+491234567890',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Standort',
      content: 'Deutschland',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:bg-[#0077B5]',
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/iman-cloud-dev',
      color: 'hover:bg-[#333]',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:bg-[#1DA1F2]',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background-light to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Kontakt
            </span>
          </h1>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Schreiben Sie uns</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-accent-green/10 border border-accent-green rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-green mr-3" />
                  <p className="text-accent-green font-medium">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      errors.name ? 'border-red-500' : 'border-neutral-medium/30'
                    }`}
                    placeholder="Ihr Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      errors.email ? 'border-red-500' : 'border-neutral-medium/30'
                    }`}
                    placeholder="ihre.email@beispiel.de"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-medium/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="+49 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-2">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-neutral-medium/30'
                    }`}
                    placeholder="Worum geht es?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-neutral-medium/30'
                    }`}
                    placeholder="Ihre Nachricht an uns..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center">
                  <Send className="mr-2 w-5 h-5" />
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-dark mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-neutral-medium hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-neutral-medium">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card bg-background-light">
                <h3 className="font-heading font-semibold text-xl mb-4">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-neutral-dark rounded-lg text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 card bg-gradient-to-br from-primary/5 to-primary-cyan/5">
                <div className="flex items-center justify-center h-64 text-neutral-medium">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="font-medium">Standortkarte</p>
                    <p className="text-sm">Wird in Kürze verfügbar sein</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Schnelle Antworten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card text-left">
                <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                  Wie schnell antworten Sie?
                </h3>
                <p className="text-neutral-medium">
                  Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen.
                </p>
              </div>
              <div className="card text-left">
                <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                  Bieten Sie kostenlose Beratung?
                </h3>
                <p className="text-neutral-medium">
                  Ja, das Erstgespräch und die Bedarfsanalyse sind für Sie kostenfrei.
                </p>
              </div>
              <div className="card text-left">
                <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                  Arbeiten Sie auch remote?
                </h3>
                <p className="text-neutral-medium">
                  Ja, viele unserer Services können wir komplett remote erbringen.
                </p>
              </div>
              <div className="card text-left">
                <h3 className="font-heading font-semibold text-lg mb-2 text-primary">
                  Wie läuft ein Projekt ab?
                </h3>
                <p className="text-neutral-medium">
                  Von der Beratung über Planung bis zur Umsetzung – alles aus einer Hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}