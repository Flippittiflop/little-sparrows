import Image from 'next/image';
import { PageHeader } from '@/components/sections/page-header';
import { Card, CardContent } from '@/components/ui/card';
import programsData from '@/data/programs.json';
import type { Program } from '@/types/program';

export default function Programs() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        description="Discover our age-appropriate learning programs designed for your child's development"
      />

      <section className="container py-12">
        <div className="grid gap-12">
          {(programsData.programs as Program[]).map((program, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-video md:aspect-square">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">{program.title}</h2>
                  <p className="mt-2 text-muted-foreground">
                    {program.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}