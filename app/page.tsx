import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Clock, Globe, CheckCircle } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  const features = [
    {
      icon: Link2,
      title: "Simple URL Shortening",
      description:
        "Convert long, complex URLs into short, memorable links in seconds.",
    },
    {
      icon: Clock,
      title: "Custom Expiration",
      description:
        "Set expiration dates on your links to control access and maintain security.",
    },
    {
      icon: Globe,
      title: "QR Code Generation",
      description:
        "Generate scannable QR codes for each shortened URL automatically.",
    },
  ];

  const benefits = [
    "Lightning-fast URL shortening",
    "Real-time analytics dashboard",
    "Custom branded domains",
    "Advanced link management",
    "Bulk URL processing",
    "API access for developers",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 inline-flex" variant="secondary">
              🚀 The Future of URL Management
            </Badge>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Shorten URLs, Amplify Your Reach
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Transform long, unwieldy URLs into short, shareable links. Track
              performance in real-time with comprehensive analytics and insights
              to optimize your digital strategy.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <SignUpButton mode="modal">
                <Button size="lg" className="text-base">
                  Get Started Free
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="outline" className="text-base">
                  Sign In
                </Button>
              </SignInButton>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • Free plan available
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="border-t border-border bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need to manage, track, and optimize your shortened
              URLs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Why Choose Our URL Shortener?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide a comprehensive solution for URL management with
                industry-leading features and reliability.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of users who trust us to manage their shortened URLs
            efficiently and securely.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <SignUpButton mode="modal">
              <Button size="lg" className="text-base">
                Create Free Account
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="outline" className="text-base">
                Sign In to Dashboard
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>
    </div>
  );
}
