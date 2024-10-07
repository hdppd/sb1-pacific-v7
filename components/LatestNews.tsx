import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const latestNews = [
  {
    id: 1,
    title: "Pacific Trade Agreement Enters Final Stages",
    description: "Negotiators from 12 countries meet to finalize terms.",
    date: "2023-05-18",
  },
  {
    id: 2,
    title: "New Technological Hub Launched in Singapore",
    description: "The facility aims to boost innovation in the region.",
    date: "2023-05-17",
  },
  {
    id: 3,
    title: "Australia Announces New Climate Policy",
    description: "The policy sets ambitious targets for renewable energy.",
    date: "2023-05-16",
  },
  {
    id: 4,
    title: "Japan's Economic Recovery Shows Promise",
    description: "Latest economic indicators suggest positive growth.",
    date: "2023-05-15",
  },
];

export default function LatestNews() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestNews.map((news) => (
          <Card key={news.id}>
            <CardHeader>
              <CardTitle>{news.title}</CardTitle>
              <CardDescription>{news.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{news.description}</p>
              <Link href={`/news/${news.id}`} className="text-primary hover:underline mt-2 inline-block">
                Read full story
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}