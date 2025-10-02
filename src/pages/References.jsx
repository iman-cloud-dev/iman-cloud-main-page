import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function References() {
  // Platzhalter für zukünftige Referenzen
  const references = [
    {
      id: 1,
      title: 'Projekt 1',
      client: 'Kunde A',
      category: 'Webentwicklung',
      description: 'Moderne Corporate Website mit CMS-Integration',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'TailwindCSS', 'CMS'],
      link: '#',
    },
    {
      id: 2,
      title: 'Projekt 2',
      client: 'Kunde B',
      category: 'Cloud Migration',
      description: 'Erfolgreiche Migration der IT-Infrastruktur in die Cloud',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Azure', 'Migration', 'DevOps'],
      link: '#',
    },
    {
      id: 3,
      title: 'Projekt 3',
      client: 'Kunde C',
      category: 'Automatisierung',
      description: 'Prozessautomatisierung mit Power Platform',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Power Apps', 'Power Automate', 'SharePoint'],
      link: '#',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background-light to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Referenzen
            </span>
          </h1>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Erfolgreiche Projekte, zufriedene Kunden. Entdecken Sie unsere bisherigen Arbeiten.
          </p>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="card bg-primary/5 border-l-4 border-primary">
              <p className="text-lg text-neutral-medium">
                <strong>Hinweis:</strong> Diese Seite befindet sich noch im Aufbau. 
                Unsere Referenzprojekte werden in Kürze hier präsentiert.
              </p>
            </div>
          </div>

          {/* Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((ref) => (
              <div key={ref.id} className="card group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={ref.image}
                    alt={ref.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                      {ref.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {ref.title}
                </h3>
                <p className="text-sm text-primary mb-2">{ref.client}</p>
                <p className="text-neutral-medium mb-4">{ref.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {ref.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-background-light text-neutral-medium text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={ref.link}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  Details ansehen
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ihr Projekt könnte hier stehen!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr nächstes erfolgreiches Projekt realisieren.
          </p>
          <Link to="/contact" className="btn-secondary inline-flex items-center">
            Projekt starten
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}