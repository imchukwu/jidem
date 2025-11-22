
import { Heart, Users, HandHelping } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jidem-green">Our Mission</h2>
          <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
          <p className="text-gray-700">
            To enhance access to inclusive, affordable, and sustainable healthcare services for underserved populations, 
            while advocating for the rights and well-being of children and individuals facing health and developmental challenges.
          </p>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jidem-green">Our Vision</h2>
          <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
          <p className="text-gray-700">
            A Nigeria where preventable blindness, health inequities, and lack of support for individuals with sickle cell disorder, 
            and developmental disorders are eliminated.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-jidem-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-jidem-green">Care & Support</h3>
            <p className="text-gray-600">
              We provide compassionate care and support to children with disabilities and their families through various programs.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-jidem-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-jidem-green">Inclusive Community</h3>
            <p className="text-gray-600">
              We foster inclusive communities where children with disabilities are valued, respected, and fully integrated.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-jidem-green rounded-full flex items-center justify-center mx-auto mb-4">
              <HandHelping size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-jidem-green">Empowerment</h3>
            <p className="text-gray-600">
              We empower children with disabilities by helping them develop skills, confidence, and independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
