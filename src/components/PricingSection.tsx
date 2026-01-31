import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$29",
      period: "Month",
      description: "Perfect for getting started",
      features: [
        "Access to Gym Equipment",
        "Basic Fitness Assessment",
        "Open Gym Access",
        "Locker Room Access",
      ],
      popular: false,
    },
    {
      name: "Elite Plan",
      price: "$99",
      period: "Month",
      description: "Best value for serious athletes",
      features: [
        "Everything in Basic",
        "Unlimited Group Classes",
        "2 Personal Training Sessions",
        "Nutrition Consultation",
        "Body Composition Analysis",
        "Personalized Workout Plan",
      ],
      popular: true,
    },
    {
      name: "Pro Plan",
      price: "$59",
      period: "Month",
      description: "For dedicated fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Unlimited Group Classes",
        "1 Personal Training Session",
        "Access to Premium Equipment",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent text-accent-foreground font-medium text-xs md:text-sm mb-3 md:mb-4 rounded-full">
            Flexible Membership
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            A Plan That Fits Your{" "}
            <span className="text-primary">Fitness Lifestyle</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Whether you're just starting or going all in — we've got the right plan to
            support your journey.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-6 md:p-8 ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-lg sm:scale-105 order-first sm:order-none"
                  : "border-border bg-card"
              } ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">{plan.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
