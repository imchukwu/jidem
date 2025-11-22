
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-jidem-green text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
              <p className="mb-6">
                Your donation will help provide much-needed support, resources, and opportunities for children with disabilities. Together, we can create a brighter future for these special children.
              </p>
              <Button asChild size="lg" className="bg-jidem-yellow hover:bg-jidem-yellow/90 text-black rounded-full">
                <Link to="/contact">Donate Now</Link>
              </Button>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 text-jidem-green">How Your Donation Helps</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span>Provide educational materials and resources</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span>Support medical and therapy services</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span>Organize community awareness programs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span>Train caregivers and educators</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-jidem-green text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span>Develop inclusive community facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
