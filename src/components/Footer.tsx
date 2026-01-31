import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-3 md:mb-4">
              <Dumbbell className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <span className="text-lg md:text-xl font-bold">FitVive</span>
            </a>
            <p className="text-background/70 text-sm md:text-base mb-4 md:mb-6">
              Transform your body and mind with our expert-led fitness programs and
              supportive community.
            </p>
            <div className="flex gap-2 md:gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Home", "About", "Programs", "Trainers", "Pricing"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Programs</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Strength Training",
                "HIIT Classes",
                "Personal Training",
                "Group Workouts",
                "Nutrition Plans",
              ].map((program) => (
                <li key={program}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm md:text-base">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm md:text-base">
                  123 Fitness Street, Gym City, GC 12345
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm md:text-base">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm md:text-base">hello@fitvive.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-background/50 text-xs md:text-sm">
            © {new Date().getFullYear()} FitVive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
