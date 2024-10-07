import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="my-12 bg-secondary p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
      <p className="mb-6">Subscribe to our newsletter for the latest insights and analysis.</p>
      <form className="flex gap-4">
        <Input type="email" placeholder="Enter your email" className="flex-grow" />
        <Button type="submit">Subscribe</Button>
      </form>
    </section>
  );
}