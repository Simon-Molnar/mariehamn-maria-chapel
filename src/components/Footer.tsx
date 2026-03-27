import { MapPin, Phone, Envelope, FacebookLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Kontakta Oss */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Kontakta Oss
            </h3>
            <div className="space-y-4 font-body text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={20} weight="light" className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">S:t Görans Katolska Kyrka</p>
                  <p>Östra Esplanadgatan 6</p>
                  <p>22100 Mariehamn, Åland</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} weight="light" className="text-primary flex-shrink-0" />
                <a href="tel:+3581812345" className="hover:text-primary transition-colors">
                  +358 18 12345
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Envelope size={20} weight="light" className="text-primary flex-shrink-0" />
                <a href="mailto:info@mariehamnskatolskaforsamling.ax" className="hover:text-primary transition-colors">
                  info@mariehamnskatolskaforsamling.ax
                </a>
              </div>
            </div>
          </div>

          {/* Om Församlingen */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Om Församlingen
            </h3>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Mariehamns katolska församling är en del av Helsingfors katolska stift.
              Vi välkomnar alla som söker Gud och gemenskap i den katolska traditionen.
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body"
            >
              <FacebookLogo size={20} weight="light" />
              Följ oss på Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mariehamns Katolska Församling. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
