"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail } from "lucide-react";
import Button from "../ui/Button";


export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your API call here
  };

  return (
    <section className="relative w-full section-lg min-h-screen bg-white overflow-hidden flex items-center justify-center py-20 lg:py-0">

      {/* --- BACKGROUND DECORATION --- */}
      {/* Uses brand-primary (Dark Blue) for the split background */}
      <div className="hidden lg:block absolute top-0 right-0 w-[35%] h-full bg-brand-accent z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_500px] gap-12 lg:gap-20 items-center">

          {/* === LEFT COLUMN: FORM & INFO === */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-4 font-serif">
                Get in <span className="text-brand-secondary">Touch</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-12">

              {/* Name Field */}
              <div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name *"
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'
                    } rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-secondary transition-colors`}
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'
                    } rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-secondary transition-colors`}
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  placeholder="Phone number *"
                  className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-200'
                    } rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-secondary transition-colors`}
                />
              </div>

              {/* Custom Button Component */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </motion.div>
            </form>

            {/* Contact Details */}
            <div className="space-y-6 text-gray-600 text-lg font-medium">

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-5 h-5 text-brand-secondary">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <span className="group-hover:text-brand-primary transition-colors duration-300">
                  +91 - 94980 70404
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-5 h-5 text-brand-secondary">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <a
                  href="mailto:info@eliteglobalschools.com"
                  className="hover:text-brand-secondary transition-colors"
                >
                  info@eliteglobalschools.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-5 h-5 text-brand-secondary mt-0.5">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <span className="max-w-[280px] leading-relaxed group-hover:text-brand-primary transition-colors duration-300">
                  No. 48&49, Kumaraswamy Nagar, Villivakkam, Chennai - 600049.
                </span>
              </div>

            </div>
          </motion.div>

          {/* === RIGHT COLUMN: MAP === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] lg:h-[600px] shadow-2xl bg-gray-100 rounded-sm overflow-hidden group"
          >
            <iframe
              width="100%"
              height="100%"
              title="Elite Global School Location"
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              // Used a generic embed for Villivakkam, Chennai to ensure it renders something valid
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31087.665678936897!2d80.199034!3d13.101834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52651337384f67%3A0xe7a322331f3c198f!2sElite%20Global%20Nursery%20%26%20Primary%20CBSE%20School!5e0!3m2!1sen!2sin!4v1768222730521!5m2!1sen!2sin"            >
            </iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31087.665678936897!2d80.199034!3d13.101834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52651337384f67%3A0xe7a322331f3c198f!2sElite%20Global%20Nursery%20%26%20Primary%20CBSE%20School!5e0!3m2!1sen!2sin!4v1768222730521!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}