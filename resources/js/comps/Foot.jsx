
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
          Serving Bay Area And Beyond
          </h1>
          <p className="p-2 text-m font-semibold tracking-tight text-white md:mx-3 xl:text-xl">
          We are trusted and approved by Carrot and Medi-Cal. 
          </p>

    
        </div>

        <hr className="my-6 border-white-200 md:my-10" />

        {/* Grid Sections */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Destinations */}
          <div>
            <h1 className="font-semibold text-xl text-white">Quick Links</h1>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/"
                className="transition-colors duration-300 text-white hover:underline"
              >
                Home
              </a>
              <a
                href="/about"
                className="transition-colors duration-300 text-white hover:underline"
              >
                About
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
             Price
              </a>
         
              <a
                href="/contact"
                className="transition-colors duration-300 text-white hover:underline"
              >
                Contact
              </a>
          
              <a
                href="/contact"
                className="transition-colors duration-300 text-white hover:underline"
              >
                Career (Are you a doula? Contact us to serve our community)
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-xl text-white">Benefits</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                target="_blank"
                href="/services"
                className="transition-colors text-white duration-300 hover:underline"
              >
             Carrot Fertility
              </a>
              <a
                target="_blank"
                href="/services"
                className="transition-colors text-white duration-300 hover:underline"
              >
              Medi-cal
              </a>
       
         
          
       
            </div>
          </div>

          {/* About */}
          <div>
            <h1 className="text-xl font-semibold text-white">Location</h1>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                target="_blank"
                href="/"
                className="transition-colors text-white duration-300 hover:underline"
              >
              Bay Area&Beyond
              </a>
      
         
          

            </div>
          </div>

          {/* Contact */}
          <div>
            <h1 className="text-xl font-semibold text-white">Connect with us</h1>
            <div className="flex items-center space-x-5 text-white">
            <a href="https://www.facebook.com/nestednurturerz?mibextid=ZbWKwL">
            <i className="fa-brands fa-facebook text-xl hover:text-pr transition"></i>
            </a>
           <a href="https://www.instagram.com/nestednurturersdoulas?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr">
           <i className="fa-brands fa-instagram text-xl hover:text-pr transition"></i>
           </a>
           <a href="https://www.tiktok.com/@nestednurturersdoulas?_r=1&_t=ZT-91baqNofnZ1">
           <i className="fa-brands fa-tiktok text-xl hover:text-pr transition"></i>
           </a>
           <a href="/">
           <i className="fa-brands fa-yelp text-xl hover:text-pr transition"></i>
           </a>
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
          <a href="/" className="mt-2">
            <img
              className="w-auto h-14"
              src="images/bottom-logo.jpeg"
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
