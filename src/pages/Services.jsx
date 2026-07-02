import { motion } from "framer-motion";
import {
  Brain,
  Network,
  Database,
  Shield,
  Cloud,
  Cpu,
  TrendingUp,
  Palette,
  Megaphone,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
/* ---------- SERVICE CATEGORIES ---------- */

const categories = [
  {
    title: "Web Design & Digital Presence",
    description:
      "Professional websites designed to help businesses attract customers, build trust, and grow online.",

    services: [
      {
        icon: Network,
        title: "Website Design & Development",
        desc: "Modern, responsive and SEO-ready websites tailored to your business goals.",

        includes: [
          "Business Websites",
          "Company Profile Websites",
          "E-Commerce Stores",
          "Landing Pages",
          "School & College Websites",
          "Hotel & Booking Websites",
          "Church & NGO Websites",
          "Portfolio Websites",
          "Blogs & News Websites",
          "Website Maintenance",
        ],

        pricing: "KSh 8,000 – 150,000+",
      },
    ],
  },

  {
    title: "Business Systems & Software Development",
    description:
      "Custom software solutions that automate operations, improve efficiency and support business growth.",

    services: [
      {
        icon: Database,
        title: "Business Management Systems",
        desc: "Tailor-made systems built around your workflow and business requirements.",

        includes: [
          "ERP Systems",
          "POS Systems",
          "Inventory Management",
          "HR & Payroll Systems",
          "CRM Systems",
          "Hospital Management Systems",
          "School Management Systems",
          "SACCO & Cooperative Systems",
          "Booking & Reservation Systems",
          "Custom Business Software",
        ],

        pricing: "KSh 40,000 – 500,000+",
      },
    ],
  },

  {
    title: "Mobile Apps, AI & Automation",
    description:
      "Smart applications and automation solutions that improve customer experience and business productivity.",

    services: [
      {
        icon: Brain,
        title: "AI & Mobile Solutions",
        desc: "Intelligent digital products built for today's businesses.",

        includes: [
          "Android Applications",
          "AI Chatbots",
          "ChatGPT Integration",
          "WhatsApp Automation",
          "Business Process Automation",
          "Document Processing AI",
          "Customer Support Bots",
          "Analytics Dashboards",
          "Workflow Automation",
          "Custom AI Solutions",
        ],

        pricing: "KSh 30,000 – 300,000+",
      },
    ],
  },

  {
    title: "SEO & Digital Marketing",
    description:
      "Increase your online visibility and attract more customers through effective digital marketing strategies.",

    services: [
      {
        icon: TrendingUp,
        title: "Digital Growth Services",
        desc: "Marketing solutions focused on growing your online presence and generating quality leads.",

        includes: [
          "Search Engine Optimization (SEO)",
          "Technical SEO Audit",
          "Google Business Profile Optimization",
          "Google Ads Management",
          "Facebook & Instagram Advertising",
          "Social Media Management",
          "Email Marketing",
          "Content Marketing",
          "Website Analytics",
          "Conversion Optimization",
        ],

        pricing: "KSh 10,000 – 80,000/month",
      },
    ],
  },

  {
    title: "Computer Sales & IT Services",
    description:
      "Reliable IT products and support services for individuals, schools and businesses.",

    services: [
      {
        icon: Cpu,
        title: "Computers & Technical Support",
        desc: "Sales, upgrades and maintenance for all your computing needs.",

        includes: [
          "Laptop Sales",
          "Desktop Computer Sales",
          "Computer Accessories",
          "Printers & Scanners",
          "Networking Equipment",
          "Laptop & Desktop Repairs",
          "Windows Installation",
          "Software Installation",
          "Network Setup",
          "Data Backup & Recovery",
        ],

        pricing: "KSh 2,000 – 250,000+",
      },
    ],
  },

  {
    title: "Online Digital Services",
    description:
      "Convenient online application and digital document services completed through official government and institutional portals.",

    services: [
      {
        icon: Cloud,
        title: "Online Application Assistance",
        desc: "Professional assistance with online submissions and digital documentation.",

        includes: [
          "KRA PIN Registration & Returns",
          "Business Name Registration",
          "eCitizen Applications",
          "Passport Application Assistance",
          "Good Conduct Applications",
          "Driving Licence Renewal",
          "HELB & KUCCPS Applications",
          "CV & Cover Letter Preparation",
          "Online Job Applications",
          "General Online Form Submission",
        ],

        pricing: "KSh 300 – 5,000",
      },
    ],
  },

  {
    title: "Brand Identity & Product Launch",
    description:
      "Build a memorable brand and launch your products with confidence using professional branding services.",

    services: [
      {
        icon: Palette,
        title: "Branding & Marketing Materials",
        desc: "Creative branding solutions that make your business stand out.",

        includes: [
          "Logo Design",
          "Brand Identity",
          "Business Cards",
          "Company Profiles",
          "Flyers & Brochures",
          "Social Media Posters",
          "Presentation Design",
          "Product Launch Campaigns",
          "Marketing Materials",
          "Visual Brand Guidelines",
        ],

        pricing: "KSh 5,000 – 80,000+",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9fc] to-white text-gray-900">

      <Hero />

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          End-to-End Digital Product Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          From scalable infrastructure and AI systems to product engineering,
          branding, and growth — modern digital solutions designed to scale
          businesses efficiently.
        </motion.p>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-32">

        {categories.map((category, index) => (
          <div key={index}>

            {/* CATEGORY HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >

              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {category.title}
              </h3>

              <p className="text-green-600 text-lg max-w-2xl leading-relaxed">
                {category.description}
              </p>

            </motion.div>

            {/* SERVICES GRID */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

              {category.services.map((service, i) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-3xl border border-green-200 bg-white/80 backdrop-blur-xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
                  >

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.08 }}
                      className="relative z-10 mb-6 text-indigo-600"
                    >
                      <Icon size={42} strokeWidth={1.6} />
                    </motion.div>

                    {/* Title */}
                    <h4 className="relative z-10 text-2xl font-semibold mb-4">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="relative z-10 text-gray-600 leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    {/* Included Services */}
                    <div className="relative z-10 space-y-3 mb-10">

                      {service.includes.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-green-500 mt-1 flex-shrink-0"
                          />

                          <span className="text-sm text-gray-700 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}

                    </div>

                    {/* Bottom Section */}
                    <div className="relative z-10 mt-auto flex items-center justify-between pt-6 border-t border-gray-100">

                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                          Pricing
                        </p>

                        <p className="text-lg font-semibold text-indigo-600">
                          {service.pricing}
                        </p>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-purple-600 transition-all duration-300"
                      >
                        Get Quote
                      </Link>

                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="pb-32 px-6">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-r from-indigo-600 to-purple-600 px-10 md:px-20 py-20 text-center text-white shadow-2xl"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s Build, Launch & Scale Your Product
          </h2>

          <p className="max-w-3xl mx-auto text-lg opacity-90 leading-relaxed mb-10">
            Whether you need infrastructure, AI integration, product
            engineering, brand identity, or scalable growth systems — everything
            is designed to work together as one cohesive digital ecosystem.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-indigo-600 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start a Project →
          </Link>

        </motion.div>

      </section>

    </main>
  );
}
