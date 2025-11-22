
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-jidem-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      {/* Map Section */}
      {/* <div className="container mx-auto px-4 pb-16">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps?q=54%20Zik's%20Avenue,%20Fegge,%20Onitsha&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div> */}
      
      <Footer />
    </div>
  );
};

export default Contact;
