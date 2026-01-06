"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* TOP FOOTER */}
      <div className="container-lg section-lg grid gap-12 md:grid-cols-4">
        
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/elite-logo.jpg"
            alt="Elite Global School"
            width={160}
            height={44}
            className="h-11 w-auto mb-4 object-contain"
            priority
          />

          <h4 className="font-primary text-lg text-brand-primary mb-2">
            Elite Global School
          </h4>

          <p className="text-lg text-text-secondary leading-relaxed max-w-xs">
            Empowering young minds through quality education and holistic
            development.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <FooterColumn title="Quick Links" delay={0.1}>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/gallery">Gallery</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </FooterColumn>

        {/* CONTACT */}
        <FooterColumn title="Contact Us" delay={0.2}>
          <p className="text-lg text-text-secondary leading-relaxed">
            No. 48 & 49, Kumarswamy Nagar,<br />
            Villivakkam,<br />
            Chennai – 600 049
          </p>

          <p className="text-lg text-text-secondary mt-3">
            info@eliteglobalschools.com
          </p>

          <p className="text-lg text-text-secondary mt-2">
            +91 99480 70404
          </p>
        </FooterColumn>

        {/* SOCIAL */}
        <FooterColumn title="Follow Us" delay={0.3}>
          <div className="flex items-center gap-4 mt-2">
            <SocialIcon Icon={FaFacebookF} />
            <SocialIcon Icon={FaInstagram} />
            <SocialIcon Icon={FaLinkedinIn} />
            <SocialIcon Icon={FaYoutube} />
          </div>
        </FooterColumn>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-300 py-6 text-center text-xs text-text-muted">
        © 2026 Elite Global School. All Rights Reserved.
      </div>
    </footer>
  );
}

/* =========================
   REUSABLE PARTS
========================= */

function FooterColumn({ title, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <h5 className="font-primary text-2xl font-bold mb-4 text-text-primary relative inline-block">
        {title}
        <span className="absolute left-0 -bottom-1 h-0.5 w-6 bg-brand-secondary" />
      </h5>
      <div className="space-y-2">{children}</div>
    </motion.div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block text-lg text-text-secondary hover:text-brand-primary transition"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
        w-8 h-8 rounded-sm
        flex items-center justify-center
        bg-white text-brand-secondary
        hover:bg-brand-primary hover:text-white
        transition-colors
        cursor-pointer
      "
    >
      <Icon size={18} />
    </motion.div>
  );
}
