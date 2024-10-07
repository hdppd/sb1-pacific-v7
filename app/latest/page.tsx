import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const latestArticles = [
  {
    id: 1,
    title: "The Future of Renewable Energy in the Pacific",
    author: "Dr. Emily Chen",
    date: "2023-05-20",
    description: "Exploring the potential for solar and wind power in Pacific island nations."
  },
  // Add more articles here...
];

export default function LatestPage() {
  return (
    <div className="content-container py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestArticles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.author} • {article.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{article.description}</p>
              <Link href={`/articles/${article.id}`} className="text-primary hover:underline mt-2 inline-block">
                Read full article
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}