import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fitness athlete training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent text-accent-foreground font-medium text-xs md:text-sm mb-4 md:mb-6 rounded-full">
            Transform Your Body
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6">
            Built for Your{" "}
            <span className="text-primary">Fitness Lifestyle.</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-lg">
            Your goals, your pace, our proven programs — crafted to help you train
            with purpose and transform with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button size="lg" className="text-base md:text-lg px-6 md:px-8">
              Book Now
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8">
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50">
            <div>
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">1,000+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Members</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">15+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Expert Trainers</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
