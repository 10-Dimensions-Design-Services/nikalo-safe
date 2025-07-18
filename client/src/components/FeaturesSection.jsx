import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔒",
      title: "Advanced Encryption",
      description: "Military-grade 256-bit encryption ensures your data is protected with the highest security standards."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times for seamless user experience."
    },
    {
      icon: "🌐",
      title: "Global Access",
      description: "Access your secure data from anywhere in the world with our distributed network."
    },
    {
      icon: "🛡️",
      title: "Zero-Knowledge Architecture",
      description: "We can't see your data. Only you have access to your encrypted information."
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description: "Available on all devices - desktop, mobile, and web with seamless synchronization."
    },
    {
      icon: "🔧",
      title: "Easy Integration",
      description: "Simple API integration for developers to add security to their applications."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="title-2 text-black mb-4">
            Why Choose Nikalo Safe?
          </h2>
          <p className="paragraph-regular-1 text-black max-w-2xl mx-auto">
            Built with cutting-edge technology to provide the most secure and reliable 
            digital protection for your valuable data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-secondary-50 border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="title-4 text-black mb-3">
                {feature.title}
              </h3>
              <p className="paragraph-regular-1 text-black leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8">
            <h3 className="title-3 text-black mb-4">
              Trusted by 10,000+ Users Worldwide
            </h3>
            <p className="paragraph-regular-1 text-black mb-6">
              Join thousands of satisfied customers who trust Nikalo Safe with their data security.
            </p>
            <button className="bg-primary text-white hover:bg-primary-dark transition-colors paragraph-bold-1 h-10 px-6 rounded-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 