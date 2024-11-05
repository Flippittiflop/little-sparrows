import Image from 'next/image';
import { PageHeader } from '@/components/sections/page-header';
import { Card, CardContent } from '@/components/ui/card';
import teamData from '@/data/team.json';
import type { TeamMember } from '@/types/team';

const values = [
  {
    title: 'Child-Centered Learning',
    description: "We focus on each child's natural curiosity and desire to learn"
  },
  {
    title: 'Individual Growth',
    description: "Supporting each child's unique development journey"
  },
  {
    title: 'Safe Environment',
    description: "Creating a secure and nurturing space for learning and play"
  },
  {
    title: 'Community Spirit',
    description: "Building strong relationships between families and educators"
  }
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn about our values and meet our dedicated team"
      />

      <section className="container py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Founded in 2010, Little Sparrows has been a cornerstone of early childhood
              education in our community. We believe every child deserves the best
              start in life, and our dedicated team works tirelessly to create an
              environment where children can thrive.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=1887"
              alt="Children learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Our Values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-center text-3xl font-bold">Our Team</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(teamData.team as TeamMember[]).map((member, index) => (
            <Card key={index}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}