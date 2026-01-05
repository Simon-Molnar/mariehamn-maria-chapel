import { Cross, Heart, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Cross,
      title: "Traditionell Liturgi",
      description: "Vi firar den heliga mässan enligt den katolska traditionens skönhet och värdighet.",
    },
    {
      icon: Heart,
      title: "Gemenskap",
      description: "En varm och välkomnande gemenskap för alla som söker Kristus och hans Kyrka.",
    },
    {
      icon: Users,
      title: "Katekesundervisning",
      description: "Fördjupa din tro genom vår undervisning för barn, ungdomar och vuxna.",
    },
    {
      icon: BookOpen,
      title: "Bibelstudier",
      description: "Gemensamma studier av den Heliga Skrift i ljuset av Kyrkans tradition.",
    },
  ];

  return (
    <section id="om-oss" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Om <span className="text-primary">S:t Maria Församling</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            S:t Maria Katolska Församling i Mariehamn är en del av Helsingfors katolska stift 
            och den universella katolska Kyrkan. Vi är en liten men livaktig gemenskap som 
            samlas kring altaret för att fira Herrens mysterier och växa i tro, hopp och kärlek.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card border border-border rounded hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
