"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, Download, CreditCard, Calendar, ShieldCheck } from "lucide-react";

const feeData = {
  Kindergarten: {
    admission: "₹25,000",
    tuition: "₹45,000",
    activity: "₹10,000",
    lab: "₹5,000",
    total: "₹85,000",
    installments: ["₹45,000 (Term 1)", "₹20,000 (Term 2)", "₹20,000 (Term 3)"],
    features: ["Personalized Care", "Montessori Tools", "Mid-day Meals", "Creative Arts", "Safe Transport", "Health Checkups"],
  },
  Primary: {
    admission: "₹30,000",
    tuition: "₹60,000",
    activity: "₹15,000",
    lab: "₹10,000",
    total: "₹1,15,000",
    installments: ["₹55,000 (Term 1)", "₹30,000 (Term 2)", "₹30,000 (Term 3)"],
    features: ["Digital Classrooms", "Language Lab", "Sports Coaching", "Library Access", "Music & Dance", "STEM Workshops"],
  },
  Secondary: {
    admission: "₹35,000",
    tuition: "₹85,000",
    activity: "₹20,000",
    lab: "₹15,000",
    total: "₹1,55,000",
    installments: ["₹75,000 (Term 1)", "₹40,000 (Term 2)", "₹40,000 (Term 3)"],
    features: ["Science Labs", "Career Counseling", "Competitive Exam Prep", "Robotics Hub", "Inter-school Sports", "Leadership Programs"],
  },
};

export default function FeeStructure() {
  const [activeTab, setActiveTab] = useState("Primary");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-secondary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-brand-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Investment in Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">
            Detailed Fee Structure
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our fee structure is designed to reflect the world-class facilities and 
            holistic education we provide at Elite Global School.
          </p>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-50 p-2 rounded-2xl flex gap-2 border border-gray-100 shadow-sm">
            {Object.keys(feeData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 md:px-10 py-4 rounded-xl text-sm font-black transition-all ${
                  activeTab === tab ? "text-white shadow-lg" : "text-gray-400 hover:text-brand-primary"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-brand-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* LEFT: PRICING BREAKDOWN (COL 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-brand-primary rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <CreditCard size={120} />
                </div>
                
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Calendar size={20} className="text-brand-secondary" />
                    Annual Academic Fee
                </h3>
                
                <div className="mb-10">
                    <span className="text-white/60 text-sm uppercase tracking-widest font-bold">Total Estimate</span>
                    <div className="text-6xl font-black mt-2">{feeData[activeTab].total}</div>
                </div>

                <div className="space-y-5">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-white/70">Admission Fee (One-time)</span>
                        <span className="font-bold">{feeData[activeTab].admission}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-white/70">Tuition Fee</span>
                        <span className="font-bold">{feeData[activeTab].tuition}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-white/70">Activities & Labs</span>
                        <span className="font-bold">{feeData[activeTab].activity}</span>
                    </div>
                </div>

                <div className="mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-3">Installment Plan</p>
                    <div className="flex flex-col gap-2">
                        {feeData[activeTab].installments.map((inst, i) => (
                            <span key={i} className="text-sm opacity-90 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full" /> {inst}
                            </span>
                        ))}
                    </div>
                </div>
              </div>

              {/* DOWNLOAD BROCHURE CARD */}
              <div className="bg-gray-900 rounded-[2rem] p-8 text-white flex items-center justify-between group cursor-pointer hover:bg-black transition-all">
                <div>
                    <h4 className="font-bold mb-1">Fee Policy 2026-27</h4>
                    <p className="text-gray-400 text-sm">Detailed PDF with all terms</p>
                </div>
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Download size={20} />
                </div>
              </div>
            </div>

            {/* RIGHT: DETAILS & FEATURES (COL 7) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <ShieldCheck className="text-green-500" size={28} />
                  Academic Excellence Pack
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 mb-10">
                  {feeData[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-green-600" size={14} />
                      </div>
                      <div>
                        <span className="text-gray-700 font-bold block text-sm">{feature}</span>
                        <span className="text-gray-400 text-xs">Included in Annual Fee</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-orange-100 text-brand-secondary rounded-xl">
                            <Info size={24} />
                        </div>
                        <h5 className="font-black text-gray-800 uppercase tracking-tight">Important Notes</h5>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-500 list-disc pl-5">
                        <li>Siblings enjoy a <span className="text-brand-primary font-bold">10% discount</span> on Tuition fees.</li>
                        <li>Transportation fees are calculated based on distance (Zone A/B/C).</li>
                        <li>Uniform and Textbooks are provided by the school at an additional cost.</li>
                    </ul>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-8 py-5 bg-brand-secondary text-white rounded-2xl font-black hover:shadow-2xl transition-all uppercase tracking-widest text-xs">
                        Book a School Tour
                    </button>
                    <button className="flex-1 px-8 py-5 border-2 border-brand-primary text-brand-primary rounded-2xl font-black hover:bg-brand-primary hover:text-white transition-all uppercase tracking-widest text-xs">
                        Contact Admissions
                    </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* TRUST BADGES */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-gray-600">
                <ShieldCheck /> Secure Online Payment
            </div>
            <div className="flex items-center gap-2 font-bold text-gray-600">
                <ShieldCheck /> CBSE Curriculum
            </div>
            <div className="flex items-center gap-2 font-bold text-gray-600">
                <ShieldCheck /> ISO Certified 9001
            </div>
        </div>

      </div>
    </section>
  );
}