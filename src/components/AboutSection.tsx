import { Users, Target, Award, Heart } from "lucide-react";
import groupWorkout from "@/assets/group-workout.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Goal Focused",
      description: "Personalized programs designed to achieve your specific fitness goals.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a supportive community that motivates and inspires each other.",
    },
    {
      icon: Award,
      title: "Expert Coaches",
      description: "Learn from certified trainers with years of professional experience.",
    },
    {
      icon: Heart,
      title: "Holistic Health",
      description: "We focus on complete wellness - body, mind, and nutrition.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={groupWorkout}
              alt="Group workout session"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-lg shadow-lg hidden sm:block">
              <p className="text-2xl md:text-4xl font-bold">10+</p>
              <p className="text-xs md:text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent text-accent-foreground font-medium text-xs md:text-sm mb-3 md:mb-4 rounded-full">
              About FitVive
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Discover a Gym That Trains You to Be{" "}
              <span className="text-primary">Stronger, Fitter, and More Focused</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              At FitVive, our community isn't just showing up — they're leveling up. From
              newcomers to elite athletes, every member pushes harder, lifts stronger, and
              supports one another through every rep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
