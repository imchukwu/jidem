
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-section min-h-[600px] flex items-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container mx-auto px-4 hero-content text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering <span className="text-jidem-yellow">Children</span> With Special Needs
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Jidem Foundation is a not-for-profit organization committed to improving health equity through specialized eye care services, 
            support for individuals living with sickle cell disorder, and advocacy for children with special disabilities and developmental disorders. 
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-jidem-yellow hover:bg-jidem-yellow/90 text-black rounded-full">
              <Link to="/contact">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
              <Link to="/programs">Our Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
