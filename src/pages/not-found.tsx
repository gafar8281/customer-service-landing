import { Link } from "react-router-dom";
import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <Background variant="top" className="min-h-screen">
      <div className="container flex min-h-screen flex-col items-center justify-center gap-6 py-20 text-center">
        <h1 className="font-heading bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
          404
        </h1>
        <p className="font-heading text-2xl font-semibold">Page not found</p>
        <p className="max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </Background>
  );
}
