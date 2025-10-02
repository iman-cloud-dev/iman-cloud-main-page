export default function Datenschutz() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-background-light to-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Datenschutzerklärung
            </span>
          </h1>
          
          <div className="max-w-4xl space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Allgemeine Hinweise</h3>
              <p className="text-neutral-medium mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Datenerfassung auf dieser Website</h3>
              <p className="text-neutral-medium mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Hosting</h2>
              <p className="text-neutral-medium mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Externes Hosting</h3>
              <p className="text-neutral-medium">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. 
                Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und 
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
                sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Datenschutz</h3>
              <p className="text-neutral-medium mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-neutral-medium mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Iman Cloud<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort]<br />
                Deutschland<br /><br />
                Telefon: +49 123 456 7890<br />
                E-Mail: info@iman-cloud.net
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Kontaktformular</h3>
              <p className="text-neutral-medium mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Server-Log-Dateien</h3>
              <p className="text-neutral-medium mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
                genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                Dies sind:
              </p>
              <ul className="list-disc list-inside text-neutral-medium mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Ihre Rechte</h2>
              <p className="text-neutral-medium mb-4">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc list-inside text-neutral-medium space-y-2">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
            </div>

            <div className="card bg-primary/5 border-l-4 border-primary">
              <p className="text-neutral-medium">
                <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und muss an die 
                spezifischen Gegebenheiten Ihrer Website angepasst werden. Konsultieren Sie einen 
                Rechtsanwalt für eine vollständige und rechtssichere Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}