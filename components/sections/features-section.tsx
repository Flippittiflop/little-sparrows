import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Users, Palette, Music, Brain } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-12 w-12 text-accent" />,
    title: 'Nurturing Environment',
    description: 'A warm and caring atmosphere where every child feels safe and loved.',
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: 'Early Learning',
    description: 'Age-appropriate educational programs that foster growth and development.',
  },
  {
    icon: <Users className="h-12 w-12 text-accent" />,
    title: 'Social Skills',
    description: 'Opportunities for children to develop friendships and social abilities.',
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: 'Creative Arts',
    description: 'Express creativity through art, crafts, and imaginative play.',
  },
  {
    icon: <Music className="h-12 w-12 text-accent" />,
    title: 'Music & Movement',
    description: 'Fun activities that combine learning with physical development.',
  },
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: 'Cognitive Growth',
    description: 'Activities that stimulate curiosity and problem-solving skills.',
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold">Why Choose Us?</h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="card">
              <CardContent className="flex flex-col items-center p-8 text-center">
                {feature.icon}
                <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-base text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}