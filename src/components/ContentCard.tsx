interface ContentCardProps {
  image: string;
  category: string;
  title: string;
  description?: string;
  href?: string;
}

const ContentCard = ({ image, category, title, description, href = "#" }: ContentCardProps) => {
  return (
    <a 
      href={href}
      className="group block bg-card rounded overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-body tracking-widest uppercase text-primary">
          {category}
        </span>
        <h3 className="font-display text-lg text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="font-body text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        <span className="inline-block mt-4 text-sm font-body tracking-wider uppercase text-primary group-hover:translate-x-1 transition-transform">
          Läs mer →
        </span>
      </div>
    </a>
  );
};

export default ContentCard;
