
import { Toast } from "primereact/toast";
import React, { useState,useRef } from "react";

export  function Footer() {
  const [email, setEmail] = useState("");
  const [loading,setLoading] = useState(false)
  const year = new Date().getFullYear();


  return (
    <footer className="bg-pr">
     
      <div className="container px-6 py-12 mx-auto">
        <div className=" md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl">
          Vision Statement
          </h1>
          <p className="p-2 text-m font-semibold tracking-tight text-white md:mx-3 xl:text-xl">
          We believe in building healthy communities through equitable doula care that improves outcomes for families and empowers those who support them.
          </p>

    
        </div>

        <hr className="my-6 border-white-200 md:my-10" />

        {/* Grid Sections */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Destinations */}
          <div>
            <h1 className="font-semibold text-xl text-white">Useful Links</h1>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/"
                className="transition-colors duration-300 text-white hover:underline"
              >
                Home
              </a>
              <a
                href="/services"
                className="transition-colors duration-300 text-white hover:underline"
              >
                Services
              </a>
              <a
                href="/pricing"
                className="transition-colors duration-300 text-white hover:underline"
              >
             Pricing
              </a>
         
           
          
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-xl text-white">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                target="_blank"
                href="/about"
                className="transition-colors text-white duration-300 hover:underline"
              >
               About Us
              </a>
              <a
                target="_blank"
                href="/services"
                className="transition-colors text-white duration-300 hover:underline"
              >
              Services
              </a>
       
              <a
                target="_blank"
                href="/contact"
                className="transition-colors text-white duration-300 hover:underline"
              >
                Contact Us
              </a>
          
          
       
            </div>
          </div>

          {/* About */}
          <div>
            <h1 className="text-xl font-semibold text-white">Resources</h1>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                target="_blank"
                href="/"
                className="transition-colors text-white duration-300 hover:underline"
              >
                Privacy Policy
              </a>
      
         
              <a
                target="_blank"
                href="/faq"
                className="transition-colors text-white duration-300 hover:underline"
              >
                FAQ
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h1 className="text-xl font-semibold text-white">Connect with us</h1>
            <div className="flex items-center space-x-5 text-white">
            <i className="fa-brands fa-facebook text-xl hover:text-pr transition"></i>
            <i className="fa-brands fa-instagram text-xl hover:text-pr transition"></i>
            <i className="fa-brands fa-twitter text-xl hover:text-pr transition"></i>
            <i className="fa-brands fa-linkedin text-xl hover:text-pr transition"></i>
          </div>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="tel:+1 (925) 316-8311"
                className="text-white transition-colors duration-300 hover:underline"
              >
                +1 (925) 316-8311
              </a>
              <a
                href="mailto:info@nestednurturers.com"
                className="text-white transition-colors duration-300 hover:underline"
              >
             info@nestednurturers.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="/">
            <img
              className="w-auto h-7"
              src="images/logo.webp"
              alt="logo"
            />
          </a>

          <p className="mt-4 text-sm sm:mt-0 text-white">
            © Copyright {year}.{" "}
            <a
              className="underline text-white"
              href="/"
              target="blank"
            >
              NestedNurturers
            </a>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
