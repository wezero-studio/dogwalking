"use client";

import React, { useState } from "react";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    roles: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[600px] overflow-hidden font-sans flex items-center"
    >
      {/* Liquid Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover [filter:saturate(1.1)_contrast(1.1)]"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6981490c51c1e151d4cb9219_2F6983902256e7c4da0df2ff8-16.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219%2F6983902256e7c4da0df2ff82_orange-gradient_mp4.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark deep-sea blue gradient overlay */}
        <div
          className="absolute inset-0 mix-blend-color"
          style={{
            background:
              "linear-gradient(135deg, #020b1f 0%, #06173b 20%, #0c2b6e 45%, #12409c 65%, #1854c4 85%, #1a62e8 100%)",
          }}
        ></div>
        {/* Extra multiply layer to darken the contact section slightly more than the hero */}
        <div className="absolute inset-0 bg-[#040e24]/40 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">

        {/* Top: heading + subtext */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-[13px] font-semibold tracking-[0.06em] uppercase text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            Contact
          </div>
          <AnimatedHeading
            as="h2"
            trigger="inView"
            text="Tell Us What You're Struggling to Hire For"
            className="text-[32px] md:text-[40px] lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] font-display text-white max-w-3xl"
          />
        </div>

        {/* Two-col layout: body + form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: subheading + dark navy CTA box — ref pic style */}
          <div className="flex flex-col gap-6 h-full">
            <RevealText as="p" className="text-[16px] leading-[1.7] text-white max-w-md">
              Whether it&apos;s one role or an ongoing pipeline, let&apos;s talk about how we can fill it.
            </RevealText>

            {/* Dark transparent navy CTA box — like "Explore More News & Insights" in ref */}
            <div className="mt-auto">
              <a
                href="mailto:hello@brittalent.co.uk"
                className="group flex items-center justify-between bg-[#475569]/80 backdrop-blur-sm border border-white/10 p-5 hover:bg-[#475569] transition-colors duration-300 max-w-[360px]"
              >
                <span className="text-white text-[16px] font-medium leading-snug">
                  Or email us directly<br />
                  <span className="text-white text-[14px] font-normal">hello@brittalent.co.uk</span>
                </span>
                <svg
                  className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:text-white transition-all ml-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: form — wrapped in glassmorphism card like stats section */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-medium text-white">Message received</h3>
                <p className="text-white/60 text-[15px]">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-white">Name</label>
                    <input
                      name="name" type="text" required
                      value={formData.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="bg-white/10 border border-white/15 px-4 py-2.5 text-white placeholder-white/25 text-[16px] focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-white">Company</label>
                    <input
                      name="company" type="text" required
                      value={formData.company} onChange={handleChange}
                      placeholder="Acme Ltd"
                      className="bg-white/10 border border-white/15 px-4 py-2.5 text-white placeholder-white/25 text-[16px] focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-white">Email</label>
                  <input
                    name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="jane@company.com"
                    className="bg-white/10 border border-white/15 px-4 py-2.5 text-white placeholder-white/25 text-[16px] focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-white">What role(s) are you hiring for?</label>
                  <input
                    name="roles" type="text" required
                    value={formData.roles} onChange={handleChange}
                    placeholder="e.g. Senior Engineer, DevOps"
                    className="bg-white/10 border border-white/15 px-4 py-2.5 text-white placeholder-white/25 text-[16px] focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-white">Message</label>
                  <textarea
                    name="message" rows={2}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us a bit more about your hiring situation..."
                    className="bg-white/10 border border-white/15 px-4 py-2.5 text-white placeholder-white/25 text-[16px] focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                {/* Submit button — dark navy transparent like ref pic */}
                <button
                  type="submit"
                  className="mt-1 w-full flex items-center justify-between bg-[#475569]/80 backdrop-blur-sm border border-white/10 px-6 py-3.5 text-white text-[15px] font-semibold hover:bg-[#475569] transition-colors group"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
