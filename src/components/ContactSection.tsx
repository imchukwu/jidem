import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jidem-green">Contact Us</h2>
          <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
          <p className="text-gray-700">
            Have questions or want to know how you can get involved? Reach out to us today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* LEFT SECTION */}
            <div className="md:w-1/3 bg-jidem-green text-white p-8">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6">
                We'd love to hear from you. Please fill out the form, and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <p>
                  <strong>Address:</strong><br />
                  54 Zik's Avenue, Fegge, Onitsha
                </p>
                <p>
                  <strong>Email:</strong><br />
                  info@jidemfoundation.org
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  +234 806 508 2988
                </p>

                {/* ACCOUNT DETAILS SECTION */}
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Account Details</h4>
                  <p>
                    <strong>Account Name:</strong><br />
                    Jidem Foundation
                  </p>
                  <p className="mt-2">
                    <strong>Account Number:</strong><br />
                    1234567890
                  </p>
                  <p className="mt-2">
                    <strong>Bank:</strong><br />
                    Zenith Bank
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-jidem-green hover:bg-jidem-green/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

            <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-jidem-green">Account Details</h3>
              <p className="mb-2"><strong>Account Name:</strong> Jidem Foundation</p>
              <p className="mb-2"><strong>Account Number:</strong> 0123456789</p>
              <p className="mb-2"><strong>Bank:</strong> Zenith Bank</p>
            </div>

export default ContactSection;