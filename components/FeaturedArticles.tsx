import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredArticles = [
  {
    id: 1,
    title: "The Shifting Geopolitics of the Indo-Pacific",
    description: "An in-depth analysis of the changing power dynamics in the region.",
    author: "Jane Doe",
    date: "2023-05-15",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Climate Change and Its Impact on Pacific Island Nations",
    description: "Exploring the environmental challenges faced by small island developing states.",
    author: "John Smith",
    date: "2023-05-10",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "The Rise of Digital Economies in Southeast Asia",
    description: "How technology is reshaping economies and societies across the region.",
    author: "Alice Johnson",
    date: "2023-05-05",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredArticles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <div className="relative w-full pt-[56.25%]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.author} • {article.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{article.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild>
                <Link href={`/articles/${article.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}