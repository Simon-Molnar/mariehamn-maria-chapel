import { Clock, MapPin, Calendar } from "lucide-react";

const MassSchedule = () => {
  const schedule = [
    { day: "Söndag", time: "10:00", type: "Högmässa" },
    { day: "Lördag", time: "18:00", type: "Vigiliemässa" },
    { day: "Onsdag", time: "18:30", type: "Vardagsmässa" },
    { day: "Fredag", time: "17:00", type: "Vardagsmässa" },
  ];

  const specialEvents = [
    "Första fredagen: Eukaristisk tillbedjan kl. 16:00",
    "Varje fredag: Rosenkransbön kl. 16:30",
    "Bikt: Lördagar kl. 17:00–17:45 eller enligt överenskommelse",
  ];

  return (
    <section id="massor" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Schedule */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              <span className="text-primary">Mässtider</span> & Gudstjänster
            </h2>

            <div className="space-y-4 mb-8">
              {schedule.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-foreground">{item.day}</div>
                    <div className="font-body text-sm text-muted-foreground">{item.type}</div>
                  </div>
                  <div className="font-display text-xl text-primary">{item.time}</div>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 p-6 rounded border border-border">
              <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Särskilda tillfällen
              </h3>
              <ul className="space-y-2">
                {specialEvents.map((event, index) => (
                  <li key={index} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location */}
          <div className="bg-card border border-border rounded p-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4">Hitta till oss</h3>
            <address className="font-body text-muted-foreground not-italic mb-6 leading-relaxed">
              S:t Maria Katolska Kyrka<br />
              Kyrkogatan 10<br />
              22100 Mariehamn<br />
              Åland, Finland
            </address>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Kyrkan ligger i centrala Mariehamn, nära torget. 
              Alla är varmt välkomna till våra gudstjänster.
            </p>
            <a 
              href="#kontakt"
              className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline"
            >
              Kontakta oss för mer information →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassSchedule;
