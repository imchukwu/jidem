
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-jidem-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About JIDEM Foundation</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Learn more about our story, mission, and the impact we're making in the lives of children with disabilities.
          </p>
        </div>
      </div>
      
      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-jidem-green">Our Story</h2>
            <p className="text-gray-700 mb-4">
              JIDEM Foundation was established on July 13, 2018 as an Incorporated Trustee with the Registration Number 114515. 
              The foundation was born out of a passion to address the unique challenges faced by children with disabilities in Nigeria.
            </p>
            <p className="text-gray-700 mb-4">
              Our founders recognized the lack of adequate support systems for these children and their families, 
              and decided to create an organization that would champion their cause and work towards a more inclusive society.
            </p>
            <p className="text-gray-700">
              Since our inception, we have been dedicated to promoting the well-being of children, with a special focus on those living with disabilities. 
              We believe that every child deserves equal opportunities to thrive and reach their full potential.
            </p>
          </div>
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-jidem-green">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-bold">Inclusion</h4>
                    <p className="text-gray-700">We believe in creating an inclusive society where everyone is valued equally.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-bold">Compassion</h4>
                    <p className="text-gray-700">We approach our work with empathy and understanding for the unique challenges faced by our beneficiaries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-bold">Empowerment</h4>
                    <p className="text-gray-700">We work to empower children with disabilities and their families with skills, resources, and support.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-1">4</div>
                  <div>
                    <h4 className="font-bold">Integrity</h4>
                    <p className="text-gray-700">We conduct our operations with transparency, accountability, and honesty.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-jidem-green text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                To enhance access to inclusive, affordable, and sustainable healthcare services for underserved populations, while advocating for the rights and well-being of children and individuals facing health and developmental challenges. 
              </p>
            </div>
            <div className="bg-jidem-yellow p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4">
                A Nigeria where preventable blindness, health inequities, and lack of support for individuals with sickle cell disorder, and developmental disorders are eliminated.
              </p>
            </div>
          </div>
        </div>
        
        {/* Registration Info */}
        {/* <div className="bg-gray-100 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4 text-jidem-green">Registration Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p><strong>Company Name:</strong> JIDEM Foundation</p>
              <p><strong>Type:</strong> Incorporated Trustee</p>
              <p><strong>RC Number:</strong> 114515</p>
            </div>
            <div>
              <p><strong>Registration Date:</strong> July 13, 2018</p>
              <p><strong>Business Address:</strong> 54 Zik's Avenue, Fegge, Onitsha</p>
              <p><strong>Official Objective:</strong> To promote the well-being of children with focus on children with disabilities</p>
            </div>
          </div>
        </div> */}
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
