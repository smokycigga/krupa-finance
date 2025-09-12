'use client';
import React, { useState, useEffect } from 'react';

import Button from '@/components/ui/Button';
import Footer from '@/components/common/Footer';
import LogoCloud from '@/components/common/LogoCloud';
import SchedulingModal from '@/components/common/SchedulingModal';
import TestimonialsSection from '@/components/common/TestimonialsSection';
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from '@/components/ui/stepper';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="bg-global-4 rounded-lg">
    <button 
      onClick={onToggle}
      className="w-full p-4 sm:p-6 flex justify-between items-center text-left hover:bg-gray-100 transition-colors"
    >
      <h3 className="text-[16px] sm:text-[18px] font-dm-sans font-semibold leading-tight sm:leading-[24px] text-global-6 pr-4">
        {question}
      </h3>
      <img 
        src="/images/img_svg_gray_900.svg" 
        alt="Toggle" 
        className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    {isOpen && (
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <p className="text-[14px] sm:text-[16px] font-dm-sans leading-relaxed sm:leading-[24px] text-global-10">
          {answer}
        </p>
      </div>
    )}
  </div>
);

const KrupaFinanceHomepage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Animated stepper effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleBookCall = () => {
    setIsSchedulingModalOpen(true);
  };

  const handleCloseScheduling = () => {
    setIsSchedulingModalOpen(false);
  };

  const faqItems = [
    {
      question: "What is Krupa Finance?",
      answer: "Krupa Finance is an advisor specializing in supply chain financing and home loans. It helps businesses and individuals access the right financial solutions with ease and transparency."
    },
    {
      question: "Do I have to pay to speak to a Krupa Finance Advisor?",
      answer: "No, consultations are free — you can book a session with a Krupa Finance advisor at no cost"
    },
    {
      question: "How can I book a consultation with Krupa Finance?",
      answer: "You can easily schedule a free consultation online or through their support team support@krupafinance.com"
    },
    {
      question: "Would you assist with claims as well?",
      answer: "Absolutely! Your Krupa Finance advisor is here to support you every step of the way. While we hope you never have to face such situations, if the need arises, we'll be right by your side to ensure your claim is settled smoothly."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Header, Hero Section with Services - Unified Background */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.png')"
        }}
      >
        {/* Header */}
        <header className="w-full px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">
            <img 
              src="/logowhite.png" 
              alt="Krupa Finance Logo" 
              className="h-[80px] sm:h-[100px] md:h-[120px] lg:h-[148px] w-auto object-contain"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 -mt-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col order-2 lg:order-1">
                <h1 className="text-[32px] sm:text-[45px] md:text-[55px] lg:text-[65px] font-dm-sans font-normal leading-tight text-white mb-4 sm:mb-6">
                  The Ultimate<br />
                  Financing Experience
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <p className="text-[18px] sm:text-[20px] md:text-[24px] font-dm-sans font-medium text-global-3">
                    Financing experience
                  </p>
                  <p className="text-[18px] sm:text-[20px] md:text-[24px] font-dm-sans font-medium text-global-2">
                    like never before
                  </p>
                </div>

                
                {/* CTA + Trust summary and bullets */}
                <div className="grid sm:grid-cols-12 gap-6 lg:gap-10 items-start mb-10">
                  {/* Left: CTA + primary stat */}
                  <div className="sm:col-span-6 lg:col-span-5 flex flex-col gap-5">
                    <Button
                      onClick={handleBookCall}
                      className="bg-global-1 text-global-13 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-base sm:text-lg whitespace-nowrap"
                      rightIcon="/images/img_svg_gray_50.svg"
                    >
                      Book A Free Call
                    </Button>
                    <div className="flex items-center gap-3">
                      <img 
                        src="/images/img_svg_white_a700.svg" 
                        alt="Check" 
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      />
                      <p className="text-[12px] sm:text-[14px] font-dm-sans text-global-14">
                        5000+ Families insured
                      </p>
                    </div>
                  </div>

                  {/* Right: Heading + 4 ticks in 2x2 grid */}
                  <div className="sm:col-span-6 lg:col-span-7 sm:pt-1 lg:pt-1.5">
                    <p className="text-[16px] sm:text-[18px] font-dm-sans font-medium text-global-14 mb-4">
                      Trusted by Thousands – here is why
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 sm:gap-y-5 sm:gap-x-10">
                      <div className="flex items-start gap-3">
                        <img 
                          src="/images/img_svg_white_a700_20x20.svg" 
                          alt="Check" 
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                        />
                        <p className="text-[13px] sm:text-[14px] font-dm-sans text-global-14">
                          No sales, only advisors
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <img 
                          src="/images/img_svg_white_a700_20x20.svg" 
                          alt="Check" 
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                        />
                        <p className="text-[13px] sm:text-[14px] font-dm-sans text-global-14">
                          No spams, EVER
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <img 
                          src="/images/img_svg_white_a700_20x20.svg" 
                          alt="Check" 
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                        />
                        <p className="text-[13px] sm:text-[14px] font-dm-sans text-global-14">
                          24/7 claims support
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <img 
                          src="/images/img_svg_white_a700_20x20.svg" 
                          alt="Check" 
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                        />
                        <p className="text-[13px] sm:text-[14px] font-dm-sans text-global-14">
                          Unbiased advice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center order-1 lg:order-2">
                <img 
                  src="/images/banner2.png" 
                  alt="Professional advisor" 
                  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[480px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[348px] rounded-lg object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-8 sm:mb-12 text-center sm:text-left">
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-dm-sans font-normal text-white mb-2">
                We offer
              </p>
              <p className="text-[28px] sm:text-[32px] md:text-[40px] font-dm-sans font-semibold text-global-3 mb-6 sm:mb-8">
                Unbiased advice on
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Supply Chain Financing */}
              <div className="group bg-white/95 rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-transparent text-[#08d404] ring-1 ring-[#08d404]/30 group-hover:ring-[#08d404]/50 group-hover:scale-105 transition-transform">
                    <svg
                      aria-hidden="true"
                      className="h-7 w-7 sm:h-8 sm:w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="6" cy="6" r="2" />
                      <circle cx="18" cy="6" r="2" />
                      <circle cx="12" cy="18" r="2" />
                      <path d="M8 6h8" />
                      <path d="M16 8l-4 8" />
                      <path d="M8 8l4 8" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] sm:text-[20px] font-dm-sans font-semibold text-gray-900 mb-2">
                      Supply Chain Financing
                    </h3>
                    <p className="text-[13px] sm:text-[14px] font-dm-sans text-gray-600 leading-relaxed">
                      Unlock working capital and smoothen payables/receivables with financing tailored to your supply chain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Home Loan */}
              <div className="group bg-white/95 rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-transparent text-[#08d404] ring-1 ring-[#08d404]/30 group-hover:ring-[#08d404]/50 group-hover:scale-105 transition-transform">
                    <svg
                      aria-hidden="true"
                      className="h-7 w-7 sm:h-8 sm:w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12l9-7 9 7" />
                      <path d="M5 10v8a1 1 0 001 1h3v-4a1 1 0 011-1h4a1 1 0 011 1v4h3a1 1 0 001-1v-8" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] sm:text-[20px] font-dm-sans font-semibold text-gray-900 mb-2">
                      Home Loan
                    </h3>
                    <p className="text-[13px] sm:text-[14px] font-dm-sans text-gray-600 leading-relaxed">
                      Competitive rates and flexible tenures, with guided support from application to disbursal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={handleBookCall}
                className="bg-global-1 text-global-13 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                rightIcon="/images/img_svg_gray_50_24x24.svg"
              >
                Book A Free Call Now!
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Process Section */}
      <section className="w-full py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-dm-sans font-semibold text-global-6 mb-8 sm:mb-12 text-center sm:text-left">
            Here's how we do it
          </h2>

          {/* Animated Progressive Stepper */}
          <div className="flex justify-center mb-8 sm:mb-12 w-full">
            <div className="w-full max-w-2xl sm:max-w-4xl">
              <Stepper value={currentStep}>
                {[1, 2, 3].map((step) => (
                  <StepperItem key={step} step={step} className="flex-1 flex items-center">
                    <div className="flex items-center w-full">
                      <StepperTrigger>
                        <StepperIndicator />
                      </StepperTrigger>
                      {step < 3 && <StepperSeparator />}
                    </div>
                  </StepperItem>
                ))}
              </Stepper>
            </div>
          </div>

          {/* Process Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-global-7 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-dm-sans font-semibold text-global-1 mb-3 sm:mb-4">
                Identify and Recommend
              </h3>
              <p className="text-[14px] sm:text-[16px] font-dm-sans text-global-10">
                We will have an in-depth conversation with you and recommend the best insurance policy tailored to your needs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-dm-sans font-semibold text-global-1 mb-3 sm:mb-4">
                Seamless Assist
              </h3>
              <p className="text-[14px] sm:text-[16px] font-dm-sans text-global-10">
                We will assist you throughout the booking process and clarify any doubts that you may have.
              </p>
            </div>
            <div className="bg-global-7 rounded-2xl p-6 sm:p-8 border border-gray-200 sm:col-span-2 lg:col-span-1">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-dm-sans font-semibold text-global-1 mb-3 sm:mb-4">
                Optimize
              </h3>
              <p className="text-[14px] sm:text-[16px] font-dm-sans text-global-10">
                We provide end-to-end support to ensure smooth claim settlement whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Krupa Finance Section */}
      <section className="w-full py-12 sm:py-16 bg-global-5 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 sm:mb-12 text-center sm:text-left">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-dm-sans font-semibold text-global-1 mb-3 sm:mb-4">
              Why Krupa Finance?
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-dm-sans text-global-1">
                Because getting insurance should 
                <span className="text-global-3"> feel reassuring</span>, not risky
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="bg-global-1 rounded-full p-2 sm:p-3 w-fit mb-4 sm:mb-6">
                <svg 
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
                  />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-dm-sans font-semibold text-global-7 mb-3 sm:mb-4">
                Get Insurance that fits your life
              </h3>
              <p className="text-[12px] sm:text-[14px] font-dm-sans text-global-11">
                We understand your needs are unique, and so should your insurance plan be.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="bg-global-1 rounded-full p-2 sm:p-3 w-fit mb-4 sm:mb-6">
                <svg 
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
                  />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-dm-sans font-semibold text-global-7 mb-3 sm:mb-4">
                We fight for your claims, so you do not have to
              </h3>
              <p className="text-[12px] sm:text-[14px] font-dm-sans text-global-11">
                No delays and no runarounds. We do not rest until you get what is rightfully yours.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="bg-global-1 rounded-full p-2 sm:p-3 w-fit mb-4 sm:mb-6">
                <svg 
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <circle cx="12" cy="12" r="9" />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6v6l4 4" 
                  />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-dm-sans font-semibold text-global-7 mb-3 sm:mb-4">
                Support that never sleeps so you can
              </h3>
              <p className="text-[12px] sm:text-[14px] font-dm-sans text-global-11">
                Because your concerns do not follow a schedule—neither does our support.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="bg-global-1 rounded-full p-2 sm:p-3 w-fit mb-4 sm:mb-6">
                <svg 
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-dm-sans font-semibold text-global-7 mb-3 sm:mb-4">
                100% Transparency guaranteed
              </h3>
              <p className="text-[12px] sm:text-[14px] font-dm-sans text-global-11">
                We do not believe in fine print. We will make sure you understand your policy before applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <LogoCloud />


      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section 
        className="w-full py-12 sm:py-16 px-4 sm:px-6"
        style={{
          backgroundImage: "url('/images/img__0x0.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-8">
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-dm-sans font-semibold text-global-7 leading-tight text-center lg:text-left">
              Financing Made<br />simple with 
              <span className="text-global-3"> Krupa Finance</span>
            </h2>
            <div className="flex justify-center lg:justify-end">
              <Button
                onClick={handleBookCall}
                className="bg-global-1 text-global-13 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
                rightIcon="/images/img_svg_gray_50.svg"
              >
                Book a free consultation now!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-dm-sans font-semibold text-global-7 mb-8 sm:mb-12 text-center sm:text-left">
            Frequently asked questions
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onToggle={() => handleFAQToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scheduling Modal */}
      <SchedulingModal 
        isOpen={isSchedulingModalOpen}
        onClose={handleCloseScheduling}
        url="https://calendly.com/samalgorakhnath8/30min"
      />
    </div>
  );
};

export default KrupaFinanceHomepage;