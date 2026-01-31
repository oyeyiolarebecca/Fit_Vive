import { Dumbbell, Users, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength & Weight Training",
      description:
        "Progressive lifting programs designed to help you gain muscle, build power, and master perfect form under expert supervision.",
    },
    {
      icon: Users,
      title: "High-Intensity Group Workouts",
      description:
        "Challenge yourself with full-body group classes like HIIT, circuit training, and bootcamps — high energy, real results.",
    },
    {
      icon: User,
      title: "One-on-One Personal Training",
      description:
        "Work directly with certified coaches who tailor each session to your goals, experience level, and performance targets.",
    },
  ];

  return (
    <section id="programs" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent text-accent-foreground font-medium text-xs md:text-sm mb-3 md:mb-4 rounded-full">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Train <span className="text-primary">Smarter</span>. Perform{" "}
            <span className="text-primary">Better</span>. Grow{" "}
            <span className="text-primary">Stronger</span>.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Whether you're just starting out or chasing peak performance, our expert-led
            programs are built to push your limits.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group relative p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 ${
                index === 1 ? "sm:col-span-2 md:col-span-1 md:-translate-y-4" : ""
              }`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <program.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{program.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{program.description}</p>
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80 text-sm md:text-base">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
