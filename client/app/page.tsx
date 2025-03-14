"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
                Revolutionising Safe and Effective Medical Diagnosis using Machine Learning
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                Using Machine Learning for Early Disease Detection in Medical Images
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/auth">
                  <Button className="bg-blue-800 hover:bg-blue-700 text-white">Get Started</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-blue-800 text-blue-800">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            >
              <Image
                src="https://imnotorious.github.io/someimage/istockphoto-908034252-612x612.jpg"
                width={550}
                height={550}
                alt="Health tracking dashboard"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Why Choose Aeternum?
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aeternum enables early detection with high accuracy and fast results, preventing health risks before they become critical.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                title: "Early Detection",
                description: "Identify potential health issues before they become serious problems.",
                delay: 0.1,
              },
              {
                title: "Improved Accuracy",
                description: "Identify potential health issues before they become serious problems.",
                delay: 0.2,
              },
              {
                title: "Faster Results",
                description: "Identify potential health issues before they become serious problems.",
                delay: 0.3,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <div className="grid gap-1 text-center">
                  <h3 className="text-xl font-bold text-blue-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button className="bg-blue-800 hover:bg-blue-700 text-white">Explore Our Services</Button>
            </Link>
          </div>
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
                Ready to transform your health?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us in revolutionizing early disease detection with AI-powered medical image analysis.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth">
                <Button className="bg-white text-blue-800 hover:bg-gray-100">Get Started Now</Button>
              </Link>
              <Link href="/about">
              <Button className="bg-white text-blue-800 hover:bg-gray-100">Learn More About Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    
      
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2025/03/06/07/20250306071115-KQ5Q48LH.js"></script>
    
    
    </div>
  )
}

