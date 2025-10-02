export default function Impressum() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-background-light to-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Impressum
            </span>
          </h1>
          
          <div className="max-w-4xl space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-neutral-medium">
                Iman Cloud<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort]<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Kontakt</h2>
              <p className="text-neutral-medium">
                Telefon: +49 123 456 7890<br />
                E-Mail: info@iman-cloud.net
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Vertreten durch</h2>
              <p className="text-neutral-medium">
                Emre [Nachname]<br />
                Albin [Nachname]<br />
                Erin [Nachname]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p className="text-neutral-medium">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Inhalte</h3>
              <p className="text-neutral-medium mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Links</h3>
              <p className="text-neutral-medium mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Urheberrecht</h3>
              <p className="text-neutral-medium">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}