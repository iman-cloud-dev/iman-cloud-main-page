import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  Server,
  Code,
  Smartphone,
  Briefcase
} from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Webentwicklung',
      description: 'Moderne, responsive Webseiten und Web-Anwendungen für Ihr Unternehmen.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud-Services',
      description: 'Sichere und skalierbare Cloud-Lösungen für Ihre digitale Infrastruktur.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'IT-Infrastruktur',
      description: 'Professionelle Beratung und Implementierung Ihrer IT-Systeme.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'IT-Support',
      description: 'Schneller und zuverlässiger Support für Unternehmen und Privatkunden.',
    },
  ]

  const usps = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Schnell & Effizient',
      description: 'Agile Arbeitsweise für schnelle Projektumsetzung',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sicher & Zuverlässig',
      description: 'Höchste Sicherheitsstandards für Ihre Daten',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Persönlich & Nahbar',
      description: 'Direkter Kontakt zu unserem Gründerteam',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background-light to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Cloud-Lösungen
                </span>
                <br />
                für die Zukunft
              </h1>
              <p className="text-xl text-neutral-medium mb-8">
                Wir bieten moderne IT-Dienstleistungen für Unternehmen jeder Größe. 
                Von der strategischen Beratung bis zur technischen Implementierung – 
                wir begleiten Sie auf Ihrem Weg in die digitale Zukunft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-outline inline-flex items-center justify-center">
                  Services entdecken
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-card-hover">
                <Cloud className="w-full h-64 text-white opacity-20" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-accent rounded-xl p-6 shadow-card-hover">
                <Briefcase className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Unsere Vision</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Drei Gründerfreunde mit einer Mission: IT-Dienstleistungen neu denken
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card bg-gradient-to-br from-primary/5 to-primary-cyan/5">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Kurzfristig
              </h3>
              <p className="text-neutral-medium">
                Wir etablieren uns als verlässlicher Partner für KMUs und Privatkunden 
                in der Region. Mit persönlichem Service und technischer Expertise 
                schaffen wir digitale Lösungen, die wirklich funktionieren.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-secondary/5 to-accent-amber/5">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-secondary">
                Langfristig
              </h3>
              <p className="text-neutral-medium">
                Wir wachsen zu einem führenden Cloud-Service-Provider mit innovativen 
                Lösungen. Dabei bleiben wir unserem Startup-Spirit treu: agil, 
                kundenorientiert und immer einen Schritt voraus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Warum Iman Cloud?</h2>
            <p className="text-xl text-neutral-medium">
              Startup-Energie meets Enterprise-Qualität
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <div className="text-white">{usp.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {usp.title}
                </h3>
                <p className="text-neutral-medium">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Unsere Services</h2>
            <p className="text-xl text-neutral-medium">
              Von der Beratung bis zur Implementierung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-medium mb-4">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center">
              Alle Services ansehen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für die digitale Zukunft?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre IT-Infrastruktur auf das nächste Level bringen.
          </p>
          <Link to="/contact" className="btn-secondary inline-flex items-center">
            Jetzt Kontakt aufnehmen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}