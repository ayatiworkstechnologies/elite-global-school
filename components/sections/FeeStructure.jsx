"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Info,
  Download,
  CreditCard,
  Calendar,
  ShieldCheck,
  AlertTriangle,
  Gift,
  Clock,
  Landmark,
} from "lucide-react";

// Shared Features for now
const defaultFeatures = [
  "Digital Classrooms",
  "Sports Coaching",
  "Library Access",
  "Music & Dance",
  "Safe Transport",
  "Health Checkups",
];

const MADHAVARAM_DATA = {
  "PRE-KG": {
    hasPartPayment: false,
    admission: "₹0",
    annual: "₹44,850",
    accessories: "₹3,000",
    totalYearly: "₹47,850",
    features: defaultFeatures,
  },
  "LKG & UKG": {
    hasPartPayment: true,
    admission: "₹0",
    annual: "₹46,950",
    accessories: "₹15,000",
    totalYearly: "₹61,950",
    term1: "₹19,950",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
  },
  "CLASS I - III": {
    hasPartPayment: true,
    admission: "₹0",
    annual: "₹47,350",
    accessories: "₹15,000",
    totalYearly: "₹62,350",
    term1: "₹20,350",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
  },
  "CLASS IV & V": {
    hasPartPayment: true,
    admission: "₹0",
    annual: "₹48,450",
    accessories: "₹15,000",
    totalYearly: "₹63,450",
    term1: "₹21,450",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
  },
  "CLASS VI - VIII": {
    hasPartPayment: true,
    admission: "₹0",
    annual: "₹49,850",
    accessories: "₹15,000",
    totalYearly: "₹64,850",
    term1: "₹22,850",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
    hasUpgradeBenefit: true,
    benefitTitle: "New Campus Upgrade Benefit",
    benefitTextStart: "A one-time flat discount of",
    benefitAmount: "₹2,500/-",
    benefitTextEnd:
      "is applied for the students of Grade V - VII transitioning to our Madhavaram Campus for the 2026-27 Academic Year.",
  },
  "CLASS IX & X": {
    hasPartPayment: true,
    admission: "₹0",
    annual: "₹51,650",
    accessories: "₹15,000",
    totalYearly: "₹66,650",
    term1: "₹24,650",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
  },
  "CLASS XI & XII": {
    hasPartPayment: true,
    admission: "₹0",
    annual: "₹53,850",
    accessories: "₹15,000",
    totalYearly: "₹68,850",
    term1: "₹26,850",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
  },
};

const VILLIVAKKAM_DATA = {
  "PRE-KG": {
    hasPartPayment: false,
    admission: "₹0",
    annual: "₹44,850",
    accessories: "₹3,000",
    totalYearly: "₹47,850",
    features: defaultFeatures,
  },
  "LKG & UKG": {
    hasPartPayment: true,
    admission: "₹7,000",
    annual: "₹46,950",
    accessories: "₹15,000",
    totalYearly: "₹61,950",
    term1: "₹19,950",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
    hasUpgradeBenefit: true,
    benefitTitle: "Madhavaram Campus Transfer Benefit",
    benefitTextStart: "A flat discount of",
    benefitAmount: "₹1,500/-",
    benefitTextEnd:
      "is applied for the students of LKG to STD V willing to transfer to our Madhavaram Campus for the 2026-27 Academic Year.",
  },
  "CLASS I - III": {
    hasPartPayment: true,
    admission: "₹7,000",
    annual: "₹47,350",
    accessories: "₹15,000",
    totalYearly: "₹62,350",
    term1: "₹20,350",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
    hasUpgradeBenefit: true,
    benefitTitle: "Madhavaram Campus Transfer Benefit",
    benefitTextStart: "A flat discount of",
    benefitAmount: "₹1,500/-",
    benefitTextEnd:
      "is applied for the students of LKG to STD V willing to transfer to our Madhavaram Campus for the 2026-27 Academic Year.",
  },
  "CLASS IV & V": {
    hasPartPayment: true,
    admission: "₹7,000",
    annual: "₹48,450",
    accessories: "₹15,000",
    totalYearly: "₹63,450",
    term1: "₹21,450",
    term2: "₹13,500",
    term3: "₹13,500",
    features: defaultFeatures,
    hasUpgradeBenefit: true,
    benefitTitle: "Madhavaram Campus Transfer Benefit",
    benefitTextStart: "A flat discount of",
    benefitAmount: "₹1,500/-",
    benefitTextEnd:
      "is applied for the students of LKG to STD V willing to transfer to our Madhavaram Campus for the 2026-27 Academic Year.",
  },
};

const feeData = {
  Madhavaram: MADHAVARAM_DATA,
  Villivakkam: VILLIVAKKAM_DATA,
};

export default function FeeStructure() {
  const [activeCampus, setActiveCampus] = useState("Madhavaram");
  const [activeGrade, setActiveGrade] = useState("LKG & UKG");

  const currentData = feeData[activeCampus]?.[activeGrade];

  if (!currentData) return null;

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-secondary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Academic Year 2026-27
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-primary mb-6"
          >
            Fee Structure
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto text-left"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <ShieldCheck className="text-green-500" size={24} />
              Dear Parents,
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are honored to partner with you in your child&apos;s
              educational journey. This fee plan is designed to help you manage
              tuition payments throughout the year. Your commitment to these
              schedules allows us to focus on what matters most: creating an
              enriching, safe, and innovative learning environment for our
              students.
            </p>
          </motion.div>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          {/* CAMPUS TOGGLE */}
          <div className="bg-white p-2 rounded-full flex gap-2 border border-gray-200 shadow-md">
            {Object.keys(feeData).map((campus) => (
              <button
                key={campus}
                onClick={() => {
                  setActiveCampus(campus);
                  if (!feeData[campus][activeGrade]) {
                    setActiveGrade(Object.keys(feeData[campus])[0]);
                  }
                }}
                className={`relative px-8 md:px-12 py-3 rounded-full text-base font-black transition-all ${
                  activeCampus === campus
                    ? "text-white shadow-md"
                    : "text-gray-500 hover:text-brand-primary"
                }`}
              >
                {activeCampus === campus && (
                  <motion.div
                    layoutId="activeCampusPill"
                    className="absolute inset-0 bg-brand-primary rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{campus} Campus</span>
              </button>
            ))}
          </div>

          {/* GRADE TABS */}
          <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex justify-center min-w-max mx-auto gap-2 px-4">
              {Object.keys(feeData[activeCampus]).map((grade) => (
                <button
                  key={grade}
                  onClick={() => setActiveGrade(grade)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-black transition-all border ${
                    activeGrade === grade
                      ? "border-brand-primary text-brand-primary bg-brand-primary/5"
                      : "border-gray-200 text-gray-500 hover:border-brand-primary/30 hover:text-brand-primary bg-white"
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">
                    {grade}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN PRICING CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCampus}-${activeGrade}`}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`grid grid-cols-1 ${currentData.hasPartPayment ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-3xl mx-auto"} gap-8 mb-16`}
          >
            {/* OPTION I - YEARLY PAYMENT PLAN */}
            <div className="bg-brand-primary rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                <CreditCard size={160} />
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <span className="text-brand-secondary font-black tracking-widest text-xs uppercase mb-2 block">
                    Option I
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Yearly Payment Plan
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-10 relative z-10">
                {currentData.hasPartPayment && (
                  <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                    <Gift
                      className="text-brand-secondary flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <span className="block font-bold text-brand-secondary mb-1">
                        Instant Savings
                      </span>
                      <span className="text-sm text-white/90">
                        Avail a flat ₹2,000 discount on the total annual fee
                        when paid in full as a single installment.
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <CheckCircle2
                    className="text-green-400 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <span className="block font-bold text-green-400 mb-1">
                      Hassle-Free Planning
                    </span>
                    <span className="text-sm text-white/90">
                      Enjoy peace of mind by eliminating the need to track
                      multiple deadlines and avoiding any potential late fees
                      for the entire academic year.
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 relative z-10">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">
                      Admission Fee{" "}
                      <span className="text-[10px] block opacity-70">
                        (only at admission)
                      </span>
                    </span>
                    <span className="font-bold text-xl">
                      {currentData.admission}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Annual Fee</span>
                    <span className="font-bold text-xl">
                      {currentData.annual}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">
                      Accessories Fee{" "}
                      <span className="text-[10px] block opacity-70">
                        (Books, Uniforms, Bag, etc.)
                      </span>
                    </span>
                    <span className="font-bold text-xl">
                      {currentData.accessories}
                    </span>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <div className="flex justify-between items-end">
                    <span className="text-white/60 text-sm uppercase tracking-widest font-bold">
                      Total Year Estimate
                    </span>
                    <span className="text-5xl font-black text-brand-secondary">
                      {currentData.totalYearly}
                    </span>
                  </div>
                  {currentData.hasPartPayment && (
                    <p className="text-right text-sm text-green-400 mt-2 font-bold animate-pulse">
                      (Apply ₹2,000 Discount on this total)
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* OPTION II - PART PAYMENT PLAN */}
            {currentData.hasPartPayment && (
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 text-gray-800 shadow-xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="mb-8">
                    <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                      Option II
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">
                      Part Payment Plan
                    </h3>
                    <p className="text-sm text-gray-500 mt-3">
                      Split your payments across the academic terms for
                      comfortable financial planning.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 mb-8">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600 font-bold">
                        Admission Fee{" "}
                        <span className="text-[10px] uppercase font-normal text-gray-400 block mt-1">
                          (Only at admission)
                        </span>
                      </span>
                      <span className="font-black text-xl">
                        {currentData.admission}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 font-bold">
                          Accessories Fee
                        </span>
                        <div className="group relative">
                          <Info
                            size={16}
                            className="text-gray-400 cursor-help"
                          />
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-gray-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                            Includes textbooks, notebooks, stationery, school
                            uniforms, PET uniforms, school bag, etc.
                          </div>
                        </div>
                      </div>
                      <span className="font-black text-xl">
                        {currentData.accessories}
                      </span>
                    </div>

                    <div className="pt-6 space-y-4">
                      <h4 className="font-bold text-brand-secondary uppercase tracking-widest text-sm mb-4">
                        Term Breakdown
                      </h4>
                      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <span className="font-bold text-gray-700">Term I</span>
                        <span className="font-black text-brand-primary">
                          {currentData.term1}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <span className="font-bold text-gray-700">Term II</span>
                        <span className="font-black text-brand-primary">
                          {currentData.term2}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <span className="font-bold text-gray-700">
                          Term III
                        </span>
                        <span className="font-black text-brand-primary">
                          {currentData.term3}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* UPGRADE BENEFIT BANNER */}
        {currentData.hasUpgradeBenefit && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-brand-secondary to-orange-400 rounded-3xl p-8 md:p-10 text-white shadow-xl mb-16 flex flex-col md:flex-row items-center gap-8 justify-between"
          >
            <div className="flex-1">
              <h4 className="text-2xl font-black mb-2 uppercase tracking-wide">
                {currentData.benefitTitle}
              </h4>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                {currentData.benefitTextStart}{" "}
                <strong className="text-xl">{currentData.benefitAmount}</strong>{" "}
                {currentData.benefitTextEnd}
              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
              <Gift size={48} className="text-white" />
            </div>
          </motion.div>
        )}

        {/* BOTTOM SECTIONS: DATES & POLICIES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* IMPORTANT DATES */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">
                Important Dates{" "}
                <span className="block text-sm font-normal text-gray-500 mt-1">
                  & Mode of Payment
                </span>
              </h4>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h5 className="font-bold text-gray-800 mb-2">
                  Option I (Yearly)
                </h5>
                <p className="text-sm text-gray-600 flex items-start gap-2">
                  <Clock
                    size={16}
                    className="text-brand-primary flex-shrink-0 mt-0.5"
                  />
                  Within 11 working days from the date of confirmation of
                  admission.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h5 className="font-bold text-gray-800 mb-4">
                  Option II (Part Payment)
                </h5>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                    <span>Accessories Fee</span>
                    <span className="font-bold text-gray-800">
                      On or before 2nd Feb 2026
                    </span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                    <span>Term I</span>
                    <span className="font-bold text-gray-800">
                      On or before 5th Apr 2026
                    </span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                    <span>Term II</span>
                    <span className="font-bold text-gray-800">
                      On or before 5th Aug 2026
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Term III</span>
                    <span className="font-bold text-gray-800">
                      On or before 5th Nov 2026
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-4 p-4 bg-brand-primary/5 rounded-2xl border border-brand-primary/10">
                <Landmark size={24} className="text-brand-primary" />
                <div>
                  <span className="block text-sm font-bold text-gray-800">
                    Payment Modes Accepted
                  </span>
                  <span className="text-xs text-gray-500">
                    CASH / CARD / ONLINE (Card charges applicable)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PAYMENT TERMS & POLICY */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                <AlertTriangle size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">
                Payment Terms{" "}
                <span className="block text-sm font-normal text-gray-500 mt-1">
                  & Policies
                </span>
              </h4>
            </div>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                <p>
                  <strong className="text-gray-800">Grace Period:</strong> A
                  grace period of 5 days is provided after the due date.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                <p>
                  <strong className="text-gray-800">Recurring Delays:</strong>{" "}
                  If a payment is more than 15 days overdue, the school reserves
                  the right to withhold report cards until the account is
                  settled.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                <p>
                  <strong className="text-gray-800">Financial Hardship:</strong>{" "}
                  We understand that unexpected situations arise. If you face a
                  financial emergency, please contact the Admin Office at least
                  3 days before the due date to discuss a temporary arrangement.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                <p>
                  <strong className="text-gray-800">Clearance:</strong> All dues
                  must be settled in full before final exams to receive progress
                  reports or Transfer Certificates.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                <p>
                  <strong className="text-gray-800">Refund Policy:</strong>{" "}
                  Admission, registration & Accessory fees are non-refundable.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                <p>
                  <strong className="text-gray-800">Campus Transfer:</strong>{" "}
                  Discounts are applicable to existing students only and do not
                  apply to New Admissions.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                <p>
                  <strong className="text-gray-800">Exclusions:</strong> Robotic
                  Kits and Professional Sports Coaching are not included in the
                  standard school fees and will involve additional charges.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* CONSTANT FOOTER */}
        <div className="bg-gray-900 rounded-[2rem] p-6 text-center shadow-lg mx-auto max-w-2xl border border-gray-800 text-gray-300">
          <span className="block text-sm mb-1 uppercase tracking-widest text-brand-secondary font-bold">
            Admin Notice
          </span>
          Cash counter functions from <strong>Monday to Saturday</strong>{" "}
          between <strong>9 a.m. to 5 p.m.</strong>
        </div>
      </div>
    </section>
  );
}
