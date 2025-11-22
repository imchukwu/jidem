
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "JIDEM Foundation has been a blessing to our family. They provided much-needed resources for our son with special needs.",
      name: "Mrs. Okafor",
      role: "Parent",
    },
    {
      id: 2,
      quote: "The work JIDEM does in our community has transformed how we understand and support children with disabilities.",
      name: "Mr. Johnson",
      role: "Community Leader",
    },
    {
      id: 3,
      quote: "The foundation's educational support program helped my daughter gain confidence and improve her learning abilities.",
      name: "Mrs. Adebayo",
      role: "Parent",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jidem-green">Testimonials</h2>
          <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
          <p className="text-gray-700">
            Hear from families and community members who have been impacted by our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-6 rounded-lg relative"
            >
              <div className="text-6xl text-jidem-green opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="italic text-gray-700 mb-6">
                  {testimonial.quote}
                </p>
                <div className="font-bold text-jidem-green">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
