"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const topicImages = [
  // Economy
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1579532536935-619928decd08?w=800&h=400&fit=crop",
  // Politics
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
  // Environment
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=400&fit=crop",
  // Technology
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
  // Culture
  "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=400&fit=crop"
];

const authors = [
  "Dr. Jason Wong", "Prof. Kim Holms", "Dr. Emily Chen", "Dr. Michael Nguyen",
  "Prof. Sarah Johnson", "Dr. David Lee", "Prof. Maria Garcia", "Dr. Robert Tanaka",
  "Prof. Olivia Patel", "Dr. Thomas Anderson", "Prof. Yuki Yamamoto", "Dr. Sophia Lee",
  "Prof. Carlos Rodriguez", "Dr. Aisha Khan", "Prof. James O'Brien", "Dr. Mei Ling",
  "Prof. Alexei Volkov", "Dr. Fatima Al-Sayed", "Prof. Raj Patel", "Dr. Emma Wilson",
  "Prof. Hiroshi Tanaka"
];

const articleTitles = [
  "Economic Trends Reshaping the Pacific Rim",
  "Political Dynamics in the Asia-Pacific Region",
  "Climate Change Challenges for Pacific Island Nations",
  "Technological Innovation Hubs in Southeast Asia",
  "Cultural Exchange Programs Bridging East and West",
  "Trade Agreements and Their Impact on Pacific Economies",
  "Geopolitical Shifts in the South China Sea",
  "Sustainable Development Goals in Oceania",
  "The Rise of Fintech in Asian Markets",
  "Indigenous Rights Movements Across the Pacific",
  "Maritime Security Cooperation in the Indo-Pacific",
  "Renewable Energy Initiatives in Pacific Countries",
  "Artificial Intelligence Adoption in Asian Industries",
  "Preserving Traditional Arts in Modern Pacific Societies",
  "Economic Diversification Strategies for Island Nations",
  "Diplomatic Relations Between China and Pacific States",
  "Marine Conservation Efforts in the Coral Triangle",
  "5G Technology Rollout Across Asian Cities",
  "The Influence of K-pop and J-pop in Global Culture",
  "Healthcare Systems and Pandemic Preparedness in the Pacific",
  "Urban Planning Challenges in Rapidly Growing Asian Metropolises"
];

const generateArticles = (count: number) => {
  const topics = ['economy', 'politics', 'environment', 'technology', 'culture'];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: articleTitles[i],
    author: authors[i],
    date: new Date(2023, 4, 20 - i).toISOString().split('T')[0],
    description: `An in-depth analysis of ${topics[i % 5]} changes affecting the Pacific region.`,
    image: topicImages[i % topicImages.length]
  }));
};

const latestArticles = generateArticles(21);

export default function LatestArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;
  const totalPages = Math.ceil(latestArticles.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = latestArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentArticles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <div className="relative w-full pt-[56.25%]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{article.title}</CardTitle>
              <CardDescription>{article.author} • {article.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm">{article.description}</p>
            </CardContent>
            <div className="p-4 pt-0 mt-auto">
              <Link href={`/articles/${article.id}`} className="text-primary hover:underline text-sm">
                Read full article
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            variant={currentPage === i + 1 ? "default" : "outline"}
            className="mx-1"
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </section>
  );
}