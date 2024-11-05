export interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground md:text-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}