"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Services() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Our Services</h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how Aeternum can help you achieve your health and wellness goals with our comprehensive
                services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
{/* Main Services Section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 text-center">
  <div className="container px-4 md:px-6">
    <motion.div
      className="flex flex-col items-center justify-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Diagnosis Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
        <ul className="list-disc text-left text-gray-700 space-y-2 md:text-lg mx-auto">
          <li>Atelectasis</li>
          <li>Consolidation</li>
          <li>Infiltration</li>
          <li>Pneumothorax</li>
        </ul>
        <ul className="list-disc text-left text-gray-700 space-y-2 md:text-lg mx-auto">
          <li>Edema</li>
          <li>Emphysema</li>
          <li>Fibrosis</li>
          <li>Effusion</li>
        </ul>
        <ul className="list-disc text-left text-gray-700 space-y-2 md:text-lg mx-auto">
          <li>Pneumonia</li>
          <li>Cardiomegaly</li>
          <li>Nodule Mass</li>
          <li>Hernia</li>
        </ul>
      </div>
    </motion.div>
  </div>
</section>



      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start your health journey today
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who have already improved their wellbeing with Aeternum.
              </p>
            </div>
            <Link href="/auth">
              <Button className="bg-white text-blue-800 hover:bg-gray-100">Get Started Now</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
