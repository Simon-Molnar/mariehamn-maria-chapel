import { Mail, Phone, Clock, Cross } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              <span className="text-primary">Kontakta</span> oss
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Vi ser fram emot att höra från dig. Tveka inte att kontakta oss med frågor 
              om församlingen, sakramenten eller det katolska livet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cross className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Kyrkoherde</h3>
                  <p className="font-body text-muted-foreground">
                    Kontakta vår kyrkoherde för andlig vägledning, 
                    bikt eller samtal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">E-post</h3>
                  <a 
                    href="mailto:info@mariehamnskatolskaforsamling.ax" 
                    className="font-body text-primary hover:underline"
                  >
                    info@mariehamnskatolskaforsamling.ax
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Telefon</h3>
                  <a 
                    href="tel:+3581812345" 
                    className="font-body text-primary hover:underline"
                  >
                    +358 18 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Öppettider</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Expeditionen: Tisdag–Fredag 10:00–14:00
                    <br />
                    Kyrkan: Öppen vid gudstjänster
                  </p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-card border border-border rounded p-8">
              <h3 className="font-display text-xl text-foreground mb-6">
                Vill du bli katolik?
              </h3>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Om du är intresserad av att lära känna den katolska tron eller förbereda dig 
                för att upptas i Kyrkan, är du varmt välkommen att kontakta oss. Vi erbjuder 
                undervisning för vuxna (katekumenat) och svarar gärna på dina frågor.
              </p>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                För döpta kristna som önskar full gemenskap med den katolska Kyrkan finns 
                också möjlighet till särskild förberedelse.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-body text-sm text-muted-foreground italic">
                  "Den katolska Kyrkan är inte en sekt eller en av många kristna kyrkor. 
                  Hon är den ursprungliga Kyrkan, grundad av Jesus Kristus på aposteln Petrus."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
