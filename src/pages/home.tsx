import { Coffee, Brain, Sparkles, ThumbsUp } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { CoffeePreferenceForm } from "@/components/coffee-preference-form";
import { CoffeeRecommendationCard } from "@/components/coffee-recommendation-card";
import { FeatureCard } from "@/components/feature-card";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <Typography.H3>AI Coffee Match</Typography.H3>
          </div>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Typography.H1 className="mb-6">
          Discover Your Perfect Coffee Match
        </Typography.H1>
        <Typography.Lead className="max-w-2xl mx-auto mb-12">
          Our AI-powered recommendation system analyzes your preferences to suggest
          the perfect coffee for your unique taste profile.
        </Typography.Lead>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-secondary/50">
        <Typography.H2 className="text-center mb-12">
          Why Choose AI Coffee Match?
        </Typography.H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={Brain}
            title="Smart Analysis"
            description="Advanced AI algorithms analyze your preferences to find your perfect match"
          />
          <FeatureCard
            icon={Sparkles}
            title="Personalized Results"
            description="Get tailored recommendations based on your unique taste profile"
          />
          <FeatureCard
            icon={ThumbsUp}
            title="Expert Curation"
            description="All coffees are carefully selected and quality-tested by experts"
          />
        </div>
      </section>

      {/* Recommendation Form */}
      <section className="container mx-auto px-4 py-16">
        <Typography.H2 className="text-center mb-12">
          Find Your Perfect Coffee
        </Typography.H2>
        <CoffeePreferenceForm />
      </section>

      {/* Sample Recommendation */}
      <section className="container mx-auto px-4 py-16 bg-secondary/50">
        <Typography.H2 className="text-center mb-12">
          Featured Recommendation
        </Typography.H2>
        <CoffeeRecommendationCard
          name="Ethiopian Yirgacheffe"
          description="A bright and complex coffee with floral notes and citrus undertones. Perfect for those who enjoy a light, aromatic brew."
          roastLevel="Light"
          origin="Ethiopia"
          price="$18.99"
          onOrder={() => console.log("Order placed")}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <Typography.Small className="text-center block">
            © 2024 AI Coffee Match. All rights reserved.
          </Typography.Small>
        </div>
      </footer>
    </div>
  );
}