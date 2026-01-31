import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 px-2">
          Ready to Commit? Let's Build Your{" "}
          <span className="underline decoration-2 md:decoration-4 underline-offset-4">Strongest Self.</span>
        </h2>
        <p className="text-primary-foreground/80 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Join over 1,000 members who've transformed their bodies and minds with FitVive.
          Your journey starts today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base md:text-lg px-6 md:px-8"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg px-6 md:px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
