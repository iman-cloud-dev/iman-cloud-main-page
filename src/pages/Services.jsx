import { Link } from 'react-router-dom'
import { 
  Globe, 
  Cloud, 
  Database, 
  Zap, 
  Shield,
  Wrench,
  Wifi,
  Home,
  Laptop,
  Server,
  Code2,
  ArrowRight
} from 'lucide-react'

export default function Services() {
  const businessServices = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Webseiten & Web-Apps',
      description: 'Moderne, responsive Webseiten und Web-Anwendungen. Von der Corporate Website bis zur komplexen Web-App – wir entwickeln maßgeschneiderte Lösungen.',
      features: ['Responsive Design', 'SEO-Optimierung', 'CMS-Integration', 'E-Commerce'],
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Power Apps & Automatisierung',
      description: 'Individuelle Business-Anwendungen mit Microsoft Power Platform. Automatisieren Sie Ihre Geschäftsprozesse und steigern Sie die Produktivität.',
      features: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint Integration'],
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud-Services',
      description: 'Sichere und skalierbare Cloud-Lösungen. Migration, Hosting und Management Ihrer Cloud-Infrastruktur auf Azure, AWS oder Google Cloud.',
      features: ['Cloud Migration', 'Cloud Hosting', 'Managed Services', 'Hybrid Cloud'],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Backup & Datensicherung',
      description: 'Professionelle Backup-Lösungen für Ihre Unternehmensdaten. Automatisiert, verschlüsselt und jederzeit wiederherstellbar.',
      features: ['Automatische Backups', 'Cloud Backup', 'Disaster Recovery', 'Verschlüsselung'],
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'IT-Infrastruktur',
      description: 'Planung, Aufbau und Wartung Ihrer IT-Infrastruktur. Von Netzwerken über Server bis zur kompletten Systemlandschaft.',
      features: ['Netzwerk-Setup', 'Server-Administration', 'Virtualisierung', 'Monitoring'],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Prozess-Automatisierung',
      description: 'Automatisieren Sie wiederkehrende Aufgaben und optimieren Sie Ihre Workflows. Mehr Effizienz, weniger manuelle Arbeit.',
      features: ['Workflow-Automation', 'API-Integration', 'RPA', 'Custom Scripts'],
    },
  ]

  const privateServices = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'IT-Notfall-Support',
      description: 'Schnelle Hilfe bei IT-Problemen. Wir sind für Sie da, wenn es brennt – remote oder vor Ort.',
      features: ['24/7 Hotline', 'Remote Support', 'Vor-Ort Service', 'Schnelle Reaktionszeit'],
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: 'PC-Service & Reparatur',
      description: 'Professionelle Wartung und Reparatur Ihrer Computer und Laptops. Hardware-Upgrades und Software-Installation.',
      features: ['Hardware-Reparatur', 'Software-Installation', 'Virus-Entfernung', 'Performance-Optimierung'],
    },
    {
      icon: <Wifi className="w-10 h-10" />,
      title: 'WLAN-Optimierung',
      description: 'Optimales WLAN in jedem Raum. Wir analysieren Ihr Netzwerk und sorgen für perfekte Abdeckung.',
      features: ['WLAN-Analyse', 'Router-Konfiguration', 'Mesh-Systeme', 'Reichweiten-Optimierung'],
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: 'Smart Home Setup',
      description: 'Ihr Zuhause intelligent vernetzen. Von der Planung bis zur Einrichtung Ihrer Smart Home Geräte.',
      features: ['Smart Home Beratung', 'Geräte-Installation', 'Automation-Setup', 'Integration'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background-light to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Unsere Services
            </span>
          </h1>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Von der strategischen Beratung bis zur technischen Implementierung – 
            wir bieten maßgeschneiderte IT-Lösungen für Unternehmen und Privatkunden.
          </p>
        </div>
      </section>

      {/* Business Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Für Unternehmen</h2>
            <p className="text-xl text-neutral-medium">
              Professionelle IT-Lösungen für Ihr Business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <div key={index} className="card group">
                <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-medium mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Services */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Für Privatkunden</h2>
            <p className="text-xl text-neutral-medium">
              Persönlicher IT-Service für Ihr Zuhause
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privateServices.map((service, index) => (
              <div key={index} className="card group">
                <div className="text-secondary mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-medium mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-medium">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. 
              Wir erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                Angebot anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
                Unser Team kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}