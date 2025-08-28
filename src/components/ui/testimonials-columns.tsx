"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-8 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-white" key={i}>
                  <div className="text-[14px] font-dm-sans font-normal leading-[20px] text-global-9 mb-4">
                    "{text}"
                  </div>
                  <div className="flex flex-col mt-5">
                    <div className="text-[14px] font-dm-sans font-semibold leading-[18px] text-global-9">{name}</div>
                    <div className="text-[12px] font-dm-sans leading-[16px] opacity-60 tracking-tight text-global-10">{role}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};