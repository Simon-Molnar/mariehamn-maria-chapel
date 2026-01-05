import ContentCard from "./ContentCard";
import massImage from "@/assets/mass.jpg";
import rosaryImage from "@/assets/rosary.jpg";
import eucharistImage from "@/assets/eucharist.jpg";

const LatestSection = () => {
  const items = [
    {
      image: massImage,
      category: "Den Heliga Mässan",
      title: "Mässtider och liturgisk kalender",
      description: "Se våra regelbundna mässtider och kommande högtider i den liturgiska kalendern.",
    },
    {
      image: rosaryImage,
      category: "Bön och Andakt",
      title: "Rosenkransbön varje fredag",
      description: "Delta i gemensam rosenkransbön och fördjupa din andliga praktik.",
    },
    {
      image: eucharistImage,
      category: "Sakramenten",
      title: "Dop, konfirmation och äktenskap",
      description: "Lär dig mer om de heliga sakramenten och hur du kan ta emot dem.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Title Column */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-3xl text-foreground leading-tight">
              <span className="text-primary">Upptäck</span>
              <br />
              församlingen
            </h2>
            <div className="w-16 h-0.5 bg-primary mt-6" />
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <ContentCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
