// 'use client'
// import { useEffect } from 'react'
import Hero from "../components/hero";
import ClientSection from "../components/clientele-section";
import UserType from "../components/user-type";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import WhatWeOffer from "../components/what-we-offer";
import Image from "next/image";

export default function Home() {
  // useEffect(() => {
  //   import('preline')
  // }, [])

  // https://www.curri.com/
  // https://www.gokada.ng/
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-10">
        <Hero />
      </div>
      <ClientSection />
      <div className="flex  flex-col items-center  p-10">

      <h2 className="text-3xl text-blue-600 font-bold lg:text-4xl dark:text-white">
        Built for your food delivery needs
      </h2>
      <p className="mt-3 text-gray-800 dark:text-gray-400">
        DruidBox ensures that you can schedule and book deliveries with ease.{" "}
      </p>

      <UserType />
      </div>
      <WhatWeOffer />
      <ContactUs />
      <Footer />
    </main>
  );
}
