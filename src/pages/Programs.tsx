
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import progImage1 from "@/assets/images/ss.jpg";
import progImage2 from "@/assets/images/eye.jpg";
import progImage3 from "@/assets/images/special-needs.jpg";
import progImage4 from "@/assets/images/policy.jpg";

const Programs = () => {
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

  const services = [
    {
      id: 1,
      title: "Mobile Clinic",
      description: "Offering eye care and health support to remote and underserved areas.",
    },
    {
      id: 2,
      title: "Support Networks",
      description: "Creating peer support groups for individuals with sickle cell disorder and families of children with special needs.",
    },
    {
      id: 3,
      title: "Educational Programs",
      description: "Training teachers and caregivers on managing sickle cell disorders, developmental disorders and promoting inclusive education",
    },
    {
      id: 4,
      title: "Outreach Campaigns",
      description: "Raising awareness about the importance of eye health, sickle cell management, and disability inclusion",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-jidem-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the various initiatives we run to support children with disabilities and their families.
          </p>
        </div>
      </div>
      
      {/* Programs Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-jidem-green">Core Areas of Focus</h2>
            <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
         
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <Button variant="outline" className="text-jidem-green border-jidem-green hover:bg-jidem-green hover:text-white">
                  Get Involved
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-16"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-jidem-green">Our Services</h2>
            <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
         
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((services) => (
            <div key={services.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
             
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-jidem-green">{services.title}</h3>
                <p className="text-gray-600 mb-4">
                  {services.description}
                </p>
                <Button variant="outline" className="text-jidem-green border-jidem-green hover:bg-jidem-green hover:text-white">
                  Get Involved
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-jidem-green">Want to Support Our Programs?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Your donation can make a significant impact on the lives of children with disabilities. 
            Support our programs and help us create a more inclusive world for these special children.
          </p>
          <Button asChild size="lg" className="bg-jidem-yellow hover:bg-jidem-yellow/90 text-black rounded-full">
            <Link to="/contact">Donate Now</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Programs;
