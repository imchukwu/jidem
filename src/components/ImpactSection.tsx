
const ImpactSection = () => {
  const stats = [
    { value: "4000+", label: "Sickle Cell Support" },
    { value: "300+", label: "Vision Screenings" },
    { value: "150+", label: "Corrective Glasses Distributed" },
    { value: "500+", label: "Supported Children with Developmental Disability" },
  ];

  return (
    <section className="py-16 bg-jidem-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <div className="h-1 w-20 bg-jidem-yellow mx-auto mb-6"></div>
          <p>
            Since our establishment in 2018, JIDEM Foundation has made significant strides in improving the lives of children with disabilities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-jidem-yellow mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
