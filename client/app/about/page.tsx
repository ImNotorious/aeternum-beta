"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function About() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">About Aeternum</h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn about our mission to make health tracking and wellness accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Our Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">How It Works?</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Aeternum, we believe that everyone deserves access to tools and resources that help them live
                Aeternumer, happier lives. Our mission is to empower individuals to take control of their health through
                technology, education, and community support.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              {
                title: "Image Acquisition",
                description:
                  "High-quality medical images are captured and uploaded to our secure platform.",
                delay: 0.1,
              },
              {
                title: "AI Analysis",
                description:
                  "Our advanced machine learning algorithms process and analyze the images.",
                delay: 0.2,
              },
              {
                title: "Results & Recommendations",
                description:
                  "Detailed reports are generated, highlighting potential areas of concern for further investigation.",
                delay: 0.3,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border border-blue-100 bg-blue-50 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: value.delay }}
                viewport={{ once: true }}
              >
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-blue-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-4xl gap-6 py-12 grid-cols-2 md:grid-cols-4">
          {[
            {
              name: "Akshat Jain",
              image: "/placeholder.svg?height=300&width=300",
              delay: 0.1,
            },
            {
              name: "Amulya Tripathi",
              image: "/placeholder.svg?height=300&width=300",
              delay: 0.2,
            },
            {
              name: "Aryan Sethi",
              image: "/placeholder.svg?height=300&width=300",
              delay: 0.3,
            },
            {
              name: "Nishit Kumar",
              image: "/placeholder.svg?height=300&width=300",
              delay: 0.4,
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.delay }}
              viewport={{ once: true }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                width={300}
                height={300}
                alt={member.name}
                className="aspect-square overflow-hidden rounded-full object-cover"
              />
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Suman Sharma"
              className="aspect-square overflow-hidden rounded-full object-cover"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-lg font-bold text-blue-900">Suman Sharma</h3>
              <p className="text-sm text-gray-600"></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


      {/* Partners Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
                Our Partners
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We collaborate with leading health organizations and technology companies to provide the best experience
                for our users.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  width={160}
                  height={80}
                  alt={`Partner ${index + 1}`}
                  className="aspect-[2/1] object-contain"
                />
              </motion.div>
            ))}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join us in our mission</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of a community that's committed to better health and wellness.
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

