
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import progImage1 from "@/assets/images/ss.jpg";
import progImage2 from "@/assets/images/eye.jpg";
import progImage3 from "@/assets/images/special-needs.jpg";
import progImage4 from "@/assets/images/policy.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Support for Individuals Living with Sickle Cell Disorder",
      description: "Facilitating access to medical care and counseling for individuals and families affected by sickle cell disorder. \nOrganizing workshops on crisis management, nutrition, and lifestyle adaptation for improved quality of life. \nPartnering with health organizations to ensure affordable access to medications and treatment options.",
      image: progImage1,
    },
    {
      id: 2,
      title: "Eye Health Care Services",
      description: "Delivering affordable and accessible eye care, including vision screenings, corrective lenses, and treatment of eye diseases. Conducting community outreach to prevent blindness through early detection and surgical interventions for conditions like cataracts and glaucoma. Raising awareness about eye health and safety through workshops and multimedia campaigns.",
      image: progImage2,
    },
    {
      id: 3,
      title: "Support for Children with Special Disabilities and Disorders",
      description: "Providing resources and therapies for children with developmental disabilities including learning disorders. Training educators and caregivers to support children with special needs in inclusive learning environments. Raising public awareness to combat stigma and promote acceptance of children with disabilities.",
      image: progImage3,
    },
    {
      id: 4,
      title: "Advocacy and Policy Engagement",
      description: "  Advocating for inclusive health policies that prioritize individuals with disabilities, chronic conditions, and other vulnerabilities. Collaborating with stakeholders to address barriers in healthcare, education, and social inclusion. Promoting the enforcement of laws protecting the rights of people with disabilities.",
      image: progImage4,
    },
  ];
   

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jidem-green">Core Areas of Focus</h2>
          <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
          <p className="text-gray-700">
            JIDEM Foundation runs various programs designed to support children with disabilities and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-jidem-green">{program.title}</h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <Button asChild variant="outline" className="text-jidem-green border-jidem-green hover:bg-jidem-green hover:text-white">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-jidem-green hover:bg-jidem-green/90 text-white rounded-full">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
