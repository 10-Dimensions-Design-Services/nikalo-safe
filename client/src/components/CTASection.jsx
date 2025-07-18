import React from 'react';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
      </div>
      
      <div className="relative container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="title-2 text-white mb-6">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="paragraph-regular-1 text-white mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already taken control of their digital security. 
            Start your free trial today and experience the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-primary hover:bg-primary-50 font-semibold h-10 px-6 rounded-lg transition-colors duration-200 paragraph-bold-1">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold h-10 px-6 rounded-lg transition-colors duration-200 paragraph-bold-1">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 