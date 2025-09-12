"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns";

const testimonials: Testimonial[] = [
  {
    text: "I was looking for equipment financing for my construction business and Akshat helped me pick the perfect financing option for my heavy machinery. The experience was seamless and the process was incredibly smooth.",
    name: "Priya Krishnamurthy",
    role: "Civil Construction Contractor"
  },
  {
    text: "Rajesh helped me a lot in securing the right working capital loan for my building materials supply business and patiently explained all the terms and benefits. He responded to all my queries promptly.",
    name: "Venkatesh Reddy",
    role: "Building Materials Supplier"
  },
  {
    text: "I had been searching for months for a good home loan with competitive rates. Through Krupa Finance, I got connected with the best lenders and secured an excellent deal.",
    name: "Lakshmi Iyer",
    role: "Architect"
  },
  {
    text: "A big thanks to Vikram! He has been very patient with all my questions about term loans and made the decision-making process much easier for expanding my construction equipment rental business.",
    name: "Subramaniam Pillai",
    role: "Construction Equipment Rental Owner"
  },
  {
    text: "We had been in touch with Kavya for our infrastructure project financing needs. Being a complex requirement, she handled all the paperwork well and helped us navigate through the complexities.",
    name: "Ravi Chandra",
    role: "Infrastructure Development Company Owner"
  },
  {
    text: "The team at Krupa Finance made getting our working capital loan for our concrete mixing plant incredibly simple. Their expertise in understanding construction business needs is remarkable and highly professional.",
    name: "Meenakshi Naidu",
    role: "Ready Mix Concrete Business Owner"
  },
  {
    text: "Excellent service for home loan assistance. The rates they secured for us were much better than what we found elsewhere. Highly recommend their services.",
    name: "Balakrishnan Nair",
    role: "Real Estate Developer"
  },
  {
    text: "They delivered exactly what they promised. The team understood our construction financing requirements perfectly and connected us with the right lenders for our housing project development.",
    name: "Kavitha Raman",
    role: "Residential Construction Company Owner"
  },
  {
    text: "Using Krupa Finance's services, our loan approval process for our steel fabrication unit was significantly faster and more efficient. They truly understand the construction financing landscape in India.",
    name: "Murugan Subramanian",
    role: "Steel Fabrication & Construction Owner"
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="bg-white my-20 relative py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <h2 className="text-[40px] font-dm-sans font-semibold text-global-7 mb-4 text-center">
            We don't make hollow promises
          </h2>
          <p className="text-[24px] font-dm-sans text-global-11 text-center">
            Here is proof...
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;