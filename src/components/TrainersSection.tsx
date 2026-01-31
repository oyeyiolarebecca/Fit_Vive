import { Instagram, Twitter } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";

const TrainersSection = () => {
  const trainers = [
    {
      name: "Eva Mitchell",
      role: "Strength & Conditioning Coach",
      image: trainer1,
      bio: "Certified strength coach with 8+ years helping clients achieve their peak performance.",
    },
    {
      name: "Smith Hernandez",
      role: "Weight Training Specialist",
      image: trainer2,
      bio: "Former competitive bodybuilder turned coach, passionate about form and technique.",
    },
  ];

  return (
    <section id="trainers" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent text-accent-foreground font-medium text-xs md:text-sm mb-3 md:mb-4 rounded-full">
            Meet Our Trainers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Trainers Who <span className="text-primary">Inspire Results</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Certified, committed, and here to help you push limits whether you're just
            getting started or chasing your next PR.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground">{trainer.name}</h3>
                <p className="text-primary font-medium text-xs md:text-sm mb-2 md:mb-3">{trainer.role}</p>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">{trainer.bio}</p>
                <div className="flex gap-2 md:gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
