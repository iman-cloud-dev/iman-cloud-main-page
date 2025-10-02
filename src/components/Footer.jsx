import { Link } from 'react-router-dom'
import { Cloud, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold">IMAN CLOUD</span>
            </div>
            <p className="text-neutral-medium mb-4">
              Moderne IT-Dienstleistungen für Unternehmen und Privatkunden.
              Cloud-Lösungen, Webentwicklung, IT-Support und mehr.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-medium/20 rounded-lg hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/iman-cloud-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-medium/20 rounded-lg hover:bg-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-medium/20 rounded-lg hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-medium hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-medium hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-medium hover:text-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-medium hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-neutral-medium">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@iman-cloud.net" className="hover:text-primary transition-colors">
                  info@iman-cloud.net
                </a>
              </li>
              <li className="flex items-center space-x-2 text-neutral-medium">
                <Phone className="w-4 h-4" />
                <a href="tel:+491234567890" className="hover:text-primary transition-colors">
                  +49 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-medium/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-medium text-sm mb-4 md:mb-0">
            © {currentYear} Iman Cloud. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/impressum" className="text-neutral-medium hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-neutral-medium hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}