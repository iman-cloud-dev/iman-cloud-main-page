import { Link } from 'react-router-dom'
import { 
  Code, 
  Users, 
  Briefcase, 
  Heart,
  Target,
  Zap,
  Shield,
  ArrowRight,
  Mail
} from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Emre',
      role: 'Technik & Entwicklung',
      icon: <Code className="w-12 h-12" />,
      color: 'from-primary to-primary-cyan',
      responsibilities: [
        'Full-Stack Entwicklung',
        'Cloud-Architektur',
        'DevOps & Automatisierung',
        'Technische Beratung',
      ],
      skills: ['React', 'Node.js', 'Azure', 'Docker', 'Python'],
    },
    {
      name: 'Albin',
      role: 'Vertrieb & Kundenbetreuung',
      icon: <Users className="w-12 h-12" />,
      color: 'from-secondary to-accent-amber',
      responsibilities: [
        'Kundenakquise',
        'Beratung & Angebote',
        'Account Management',
        'Marketing & Kommunikation',
      ],
      skills: ['Vertrieb', 'Beratung', 'CRM', 'Marketing', 'Kommunikation'],
    },
    {
      name: 'Erin',
      role: 'Projektmanagement & Infrastruktur',
      icon: <Briefcase className="w-12 h-12" />,
      color: 'from-primary-dark to-primary',
      responsibilities: [
        'Projektplanung & -steuerung',
        'IT-Infrastruktur',
        'Qualitätssicherung',
        'Team-Koordination',
      ],
      skills: ['Projektmanagement', 'Infrastruktur', 'Agile', 'ITIL', 'Networking'],
    },
  ]

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Agil & Innovativ',
      description: 'Wir arbeiten mit modernen Methoden und sind immer am Puls der Zeit.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Persönlich & Nahbar',
      description: 'Direkter Kontakt zum Team, keine anonymen Hotlines.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Zuverlässig & Sicher',
      description: 'Höchste Qualitätsstandards und Datensicherheit.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Lösungsorientiert',
      description: 'Wir finden für jedes Problem die passende Lösung.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background-light to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Über uns
            </span>
          </h1>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Drei Gründerfreunde mit einer Mission: IT-Dienstleistungen neu denken. 
            Startup-Energie meets Enterprise-Qualität.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Unsere Geschichte</h2>
            <div className="prose prose-lg max-w-none text-neutral-medium">
              <p className="text-lg mb-4">
                Iman Cloud wurde aus der Freundschaft dreier IT-Enthusiasten geboren. 
                Emre, Albin und Erin lernten sich während ihres Studiums kennen und 
                teilten von Anfang an die Vision, IT-Dienstleistungen anders zu machen.
              </p>
              <p className="text-lg mb-4">
                Wir haben erlebt, wie frustrierend unpersönlicher IT-Support sein kann. 
                Wie kompliziert es ist, den richtigen Ansprechpartner zu finden. Und wie 
                teuer maßgeschneiderte Lösungen oft sind.
              </p>
              <p className="text-lg">
                Deshalb haben wir Iman Cloud gegründet: Ein IT-Dienstleister, der 
                technische Expertise mit persönlichem Service verbindet. Modern, agil 
                und immer auf Augenhöhe mit unseren Kunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Unser Gründerteam</h2>
            <p className="text-xl text-neutral-medium">
              Drei Experten, eine Vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card">
                {/* Avatar Placeholder */}
                <div className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white`}>
                  {member.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-center font-medium mb-6">
                  {member.role}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-neutral-dark">Verantwortungsbereiche:</h4>
                  <ul className="space-y-2">
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-sm text-neutral-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-neutral-dark">Kompetenzen:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-background-light text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-xl text-neutral-medium">
              Was uns antreibt und auszeichnet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Method Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Unsere Arbeitsweise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  1. Verstehen
                </h3>
                <p className="text-neutral-medium">
                  Wir nehmen uns Zeit, Ihre Anforderungen und Ziele genau zu verstehen. 
                  Nur so können wir die optimale Lösung entwickeln.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  2. Planen
                </h3>
                <p className="text-neutral-medium">
                  Gemeinsam entwickeln wir einen klaren Projektplan mit realistischen 
                  Meilensteinen und transparenten Kosten.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  3. Umsetzen
                </h3>
                <p className="text-neutral-medium">
                  Agile Entwicklung mit regelmäßigen Updates. Sie bleiben immer im Bild 
                  und können jederzeit Feedback geben.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  4. Betreuen
                </h3>
                <p className="text-neutral-medium">
                  Auch nach Projektabschluss sind wir für Sie da. Support, Wartung und 
                  Weiterentwicklung aus einer Hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Lernen Sie uns kennen!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Wir freuen uns auf ein persönliches Gespräch. Erzählen Sie uns von 
            Ihrem Projekt und lassen Sie uns gemeinsam die beste Lösung finden.
          </p>
          <Link to="/contact" className="btn-secondary inline-flex items-center">
            <Mail className="mr-2 w-5 h-5" />
            Kontakt aufnehmen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}