const QuoteSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-display text-6xl text-primary/30 mb-4">"</div>
          <blockquote className="font-body text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed mb-8">
            Jag är Herrens tjänarinna; 
            må det ske med mig som du har sagt.
          </blockquote>
          <cite className="font-display text-lg text-primary not-italic tracking-wide">
            — Jungfru Maria, Lukasevangeliet 1:38
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
