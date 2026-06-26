/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, BookOpen, ShieldCheck, FileText, Scale, Landmark } from 'lucide-react';

export type LegalTab = 'imprint' | 'terms' | 'privacy' | 'revocation';

interface LegalViewProps {
  activeTab: LegalTab;
  onChangeTab: (tab: LegalTab) => void;
  onBack: () => void;
}

export default function LegalView({ activeTab, onChangeTab, onBack }: LegalViewProps) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const tabs = [
    { id: 'imprint' as LegalTab, label: 'Impressum', icon: Landmark },
    { id: 'terms' as LegalTab, label: 'AGB', icon: Scale },
    { id: 'privacy' as LegalTab, label: 'Datenschutz', icon: ShieldCheck },
    { id: 'revocation' as LegalTab, label: 'Widerrufsbelehrung', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'imprint':
        return (
          <div className="space-y-6 text-[#3D4035] leading-relaxed">
            <h2 className="text-xl md:text-2xl font-serif font-black text-[#4A5D4E] italic border-b border-[#F0EFEA] pb-3">
              Impressum
            </h2>

            <section className="space-y-4 font-medium text-xs md:text-sm">
              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Angaben gemäß § 5 TMG</h3>
              <p className="text-[#3D4035]">
                <strong>OnlineSolar GmbH</strong><br />
                Sonnenallee 102<br />
                34117 Kassel
              </p>

              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Vertretung</h3>
              <p className="text-[#3D4035]">
                <strong>Vertreten durch die Geschäftsführer:</strong><br />
                Dr. h.c. Kevin Weikum (CEO), Dipl.-Ing. Stefan Sonne
              </p>

              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Kontakt</h3>
              <p className="text-[#3D4035]">
                Telefon: +49 (0) 800 SOLAR 24 (kostenfrei)<br />
                E-Mail: support@onlinesolar-pv.de<br />
                Internet: www.onlinesolar-pv.de
              </p>

              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Registereintrag</h3>
              <p className="text-[#3D4035]">
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Kassel<br />
                Registernummer: HRB 98765
              </p>

              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Umsatzsteuer-ID</h3>
              <p className="text-[#3D4035]">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong>DE 345 678 910</strong>
              </p>

              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Aufsichtsbehörde</h3>
              <p className="text-[#3D4035]">
                Gewerbeamt der Stadt Kassel, Obere Königsstraße 8, 34117 Kassel
              </p>

              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p className="text-[#3D4035]">
                Kevin Weikum (Anschrift wie oben)
              </p>

              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Streitschlichtung</h3>
              <p className="text-[#6B705C] leading-normal font-sans font-medium">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:underline">
                  https://ec.europa.eu/consumers/odr
                </a>{' '}
                finden. Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6 text-[#3D4035] leading-relaxed">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A5D4E] italic border-b border-[#F0EFEA] pb-3">
              Allgemeine Geschäftsbedingungen (AGB)
            </h2>

            <div className="space-y-6 text-xs md:text-sm font-medium">
              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">§ 1 Geltungsbereich und Anbieter</h3>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die Verbraucher über den Online-Shop der OnlineSolar GmbH (nachfolgend „OnlineSolar“) tätigen. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">§ 2 Vertragsschluss</h3>
                <p>
                  Die Präsentation der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Buttons „Kostenpflichtig bestellen“ geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab. Die Bestätigung des Eingangs der Bestellung folgt unmittelbar nach dem Absenden der Bestellung per automatisierter E-Mail.
                </p>
              </section>

              <section className="space-y-2 bg-[#FAF9F6] border border-[#E5E2D9] p-4.5 rounded-2xl">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider flex items-center gap-1.5">
                  <span>§ 3 Sonderregelung zur Umsatzsteuer (0% MwSt. für PV-Anlagen)</span>
                </h3>
                <p className="text-[#3D4035] leading-normal font-medium">
                  Gemäß <strong>§ 12 Abs. 3 UStG (Jahressteuergesetz 2022)</strong> gilt für Lieferungen von Photovoltaikanlagen und deren wesentlichen Komponenten sowie Stromspeichern ab dem 1. Januar 2023 ein Umsatzsteuersatz von 
                  <span className="font-extrabold text-[#4A5D4E]"> 0 % (Nullsteuersatz)</span>, sofern die Anlage auf oder in der Nähe von Privatwohnungen, Wohnungen sowie öffentlichen und anderen Gebäuden, die für dem Gemeinwohl dienende Tätigkeiten genutzt werden, installiert wird.
                </p>
                <p className="text-[#3D4035] leading-normal mt-2">
                  Der Kunde bestätigt mit Absenden der Bestellung ausdrücklich, dass:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#6B705C] mt-1 font-semibold">
                  <li>Er der rechtmäßige Betreiber der Photovoltaikanlage ist.</li>
                  <li>Die Bruttoleistung der Anlage laut Marktstammdatenregister 30 kW (peak) nicht überschreitet oder überschreiten wird.</li>
                  <li>Die Installation gebäudenah (Wohngebäude, Nebengebäude, etc.) erfolgt.</li>
                  <li>Kein gewerblicher Weiterverkauf der erworbenen Komponenten stattfindet.</li>
                </ul>
                <p className="text-[11px] text-[#A5A58D] mt-2 font-semibold">
                  Sollte sich nachträglich herausstellen, dass diese Voraussetzungen nicht erfüllt waren, behält sich OnlineSolar vor, die gesetzliche Mehrwertsteuer von 19 % nachzufordern.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">§ 4 Preise und Versandkosten</h3>
                <p>
                  Die im Shop angegebenen Endpreise enthalten den gesetzlichen Steuersatz (0% MwSt. für PV-Komponenten nach § 12 Abs. 3 UStG). Ab einem Warenkorbwert von 150 € erfolgt die Lieferung versandkostenfrei. Bei Bestellungen unter 150 € betragen die Versandkosten 4,90 € für Paketware und 49,00 € für palettierte Speditionsware (Module, große Speicher, Wärmepumpen).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">§ 5 Lieferbedingungen & Spedition</h3>
                <p>
                  Die Lieferung erfolgt innerhalb Deutschlands. Speditionssendungen werden „frei Bordsteinkante“ geliefert. Die Abstimmung des genauen Liefertermins erfolgt telefonisch oder per E-Mail durch unsere Partner-Möbelspedition. Bei Abholung im Lager Kassel entfallen sämtliche Versandkosten unabhängig vom Mindestbestellwert.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">§ 6 Eigentumsvorbehalt und Zahlung</h3>
                <p>
                  Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum der OnlineSolar GmbH. Als Zahlungsmittel stehen PayPal, Klarna (Rechnungskauf) und Vorkasse zur Verfügung. Bei Auswahl der Zahlungsart Vorkasse gewähren wir einen zusätzlichen Sofort-Skontoabzug in Höhe von 3 % des Rechnungsbetrages.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">§ 7 Gewährleistung und Garantien</h3>
                <p>
                  Es gelten die gesetzlichen Gewährleistungsrechte. Darüber hinausgehende Herstellergarantien (z.B. bis zu 30 Jahre Leistungsgarantie auf bifaziale Doppelglas-Module) richten sich direkt nach den Garantiebedingungen des jeweiligen Herstellers und begründen keine eigene Haftung von OnlineSolar.
                </p>
              </section>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6 text-[#3D4035] leading-relaxed">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A5D4E] italic border-b border-[#F0EFEA] pb-3">
              Datenschutzerklärung
            </h2>

            <div className="space-y-6 text-xs md:text-sm font-medium">
              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">1. Datenschutz auf einen Blick</h3>
                <h4 className="font-bold">Allgemeine Hinweise</h4>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">2. Datenerfassung auf dieser Website</h3>
                <h4 className="font-bold">Wer ist verantwortlich für die Datenerfassung?</h4>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: OnlineSolar GmbH, Sonnenallee 102, 34117 Kassel (E-Mail: support@onlinesolar-pv.de).
                </p>
                <h4 className="font-bold">Wie erfassen wir Ihre Daten?</h4>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in das Bestellformular (Warenkorb) oder bei Produktbewertungen eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem, Uhrzeit).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">3. Rechte der betroffenen Person</h3>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenden Sie sich hierzu gerne an die im Impressum genannte Adresse. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">4. Zahlung & Bestellabwicklung</h3>
                <p>
                  Zur Abwicklung Ihrer Online-Einkäufe und Bezahlung übermitteln wir Ihre Adressdaten und Zahlungsinformationen an unsere Dienstleister (DPD, Partner-Logistiker im Kassel-Zentrallager, sowie Bezahlsysteme wie PayPal und Klarna) ausschließlich zur Erfüllung des Liefervertrages nach Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </section>
            </div>
          </div>
        );

      case 'revocation':
        return (
          <div className="space-y-6 text-[#3D4035] leading-relaxed">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A5D4E] italic border-b border-[#F0EFEA] pb-3">
              Widerrufsbelehrung & Widerrufsrecht
            </h2>

            <div className="space-y-6 text-xs md:text-sm font-medium">
              <section className="space-y-2">
                <p className="font-bold text-[#4A5D4E]">Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu:</p>
                <h3 className="text-xs font-bold text-[#3D4035] border-t border-[#FAF9F6] pt-2">Widerrufsrecht</h3>
                <p>
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
                </p>
                <p>
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (OnlineSolar GmbH, Sonnenallee 102, 34117 Kassel, Tel: +49 (0) 800 SOLAR 24, E-Mail: support@onlinesolar-pv.de) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">Folgen des Widerrufs</h3>
                <p>
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                </p>
                <p>
                  Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart.
                </p>
                <p>
                  Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Bei Waren, die aufgrund ihrer Beschaffenheit nicht normal mit der Post zurückgesandt werden können (z.B. große Solarmodule des Speditionshandelps), betragen diese geschätzt höchstens etwa 95,00 EUR.
                </p>
              </section>

              <section className="space-y-2 border border-[#E5E2D9] rounded-2xl p-4.5 bg-[#FAF9F6]">
                <h3 className="text-xs font-bold text-[#3D4035] uppercase tracking-wider">Muster-Widerrufsformular</h3>
                <p className="text-[11px] text-[#6B705C] font-semibold">
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
                </p>
                <pre className="font-mono text-[10px] bg-white p-3.5 rounded-xl border border-[#E5E2D9] text-[#3D4035] leading-relaxed uppercase tracking-normal whitespace-pre-wrap mt-2">
                  An:<br />
                  OnlineSolar GmbH<br />
                  Sonnenallee 102<br />
                  34117 Kassel<br />
                  E-Mail: support@onlinesolar-pv.de<br /><br />
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)<br /><br />
                  Bestellt am (*)/erhalten am (*):<br />
                  Name des/der Verbraucher(s):<br />
                  Anschrift des/der Verbraucher(s):<br />
                  Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):<br />
                  Datum:<br /><br />
                  (*) Unzutreffendes streichen.
                </pre>
              </section>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="legal-view-container" className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* Back Button Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[#4A5D4E] hover:text-[#3D4035] text-sm font-bold py-2 px-4 rounded-xl border border-[#E5E2D9] bg-white hover:bg-[#FAF9F6] transition shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zum Shop</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Selector Navigation */}
        <div className="lg:col-span-3 bg-white border border-[#E5E2D9] rounded-3xl p-5 shadow-xs space-y-2.5">
          <div className="flex items-center gap-1.5 border-b border-[#F0EFEA] pb-3 mb-2 px-2 text-[#4A5D4E] font-extrabold text-xs tracking-wider uppercase">
            <BookOpen className="w-4 h-4 text-[#D4A373]" />
            <span>Rechtliches</span>
          </div>

          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            const tabHref = tab.id === 'imprint' ? '#/impressum'
              : tab.id === 'terms' ? '#/agb'
              : tab.id === 'privacy' ? '#/datenschutz'
              : '#/widerruf';
            return (
              <a
                key={tab.id}
                href={tabHref}
                onClick={(e) => {
                  e.preventDefault();
                  onChangeTab(tab.id);
                }}
                className={`w-full text-left py-2.5 px-3.5 rounded-xl text-xs font-bold transition flex items-center gap-2.5 cursor-pointer decoration-none ${
                  isActive
                    ? 'bg-[#4A5D4E] text-[#FAF9F6] border-l-4 border-[#D4A373]'
                    : 'bg-[#FAF9F6]/40 text-[#6B705C] hover:bg-[#FAF9F6] hover:text-[#3D4035] border-l-4 border-transparent'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#D4A373]' : 'text-[#6B705C]'}`} />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </div>

        {/* Content Pane Panel */}
        <div className="lg:col-span-9 bg-white border border-[#E5E2D9] rounded-[2rem] p-6 md:p-10 shadow-xs">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
