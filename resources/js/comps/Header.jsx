import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

import { Sidebar } from 'primereact/sidebar';

export function Header() {
  const { url } = usePage();
  const currentPath = url.split("?")[0];
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path) => currentPath === path;
  const linkClass = (path) =>
    `transition ${isActive(path) ? "text-pr" : "text-black hover:text-pr"}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-pr text-white py-2 border-b border-pr">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-phone text-lg"></i>
              <span>+1 (925) 316-8311</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <i className="fa-regular fa-envelope text-lg"></i>
              <a href="mailto:info@nestednurturers.com" className="text-white">info@nestednurturers.com</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 text-white">
           <a aria-label="Facebook link"  href="https://www.facebook.com/nestednurturerz?mibextid=ZbWKwL" target="_blank">
           <i className="fa-brands fa-facebook text-xl  cursor-pointer transition"></i>
           </a>
            <a aria-label="Instagram link"  href="https://www.instagram.com/nestednurturersdoulas?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank">
            <i className="fa-brands fa-instagram text-xl cursor-pointer transition"></i>
            </a>
          <a aria-label="Tiktok link"  href="https://www.tiktok.com/@nestednurturersdoulas?_r=1&_t=ZT-91baqNofnZ1" target="_blank">
          <i className="fa-brands fa-tiktok text-xl cursor-pointer transition"></i>
          </a>
           <a aria-label="yelp-account" href="https://www.yelp.com/biz/nested-nurturers-martinez">
           <i className="fa-brands fa-yelp text-xl cursor-pointer transition"></i>
           </a>

          </div>
        </div>
      </div>




      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <a
        aria-label="logo"
  href="/"
  className="transition-all duration-300 ease-in-out h-[90px]"
>
  <img
    src="images/updates-logo.jpeg"
    alt="Logo"
    className="h-full w-auto object-contain"
  />
</a>



        <nav className="hidden lg:flex items-center gap-12 text-base font-medium">
          <a href="/" aria-label="home-page" className={linkClass("/")}>
            Home
          </a>



          <div
  className="relative"
  onMouseEnter={() => setOpenDropdown("hotels")}
  onMouseLeave={() => setOpenDropdown(null)}
>
  {/* Hover wrapper (IMPORTANT) */}
  <div className="flex flex-col">
    {/* Trigger */}
    <a
      href="/services"
      aria-label="services-page"
      className={`flex items-center gap-2 ${linkClass("/services")}`}
    >
      Services
      <i
        className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${
          openDropdown === "hotels" ? "rotate-180" : ""
        }`}
      />
    </a>

    {/* Dropdown */}
    {openDropdown === "hotels" && (
      <div className="absolute left-0 top-full pt-2">
        <div className="w-56 rounded-xl bg-white shadow-xl z-50">
          <ul className="py-2 text-sm">
            <li>
              <a
              aria-label="services-page"
                href="/services"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Birth Support
              </a>
            </li>
            <li>
              <a
                href="/services"
                aria-label="services-page"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Postpartum Support
              </a>
            </li>
            <li>
              <a
                href="/services"
                aria-label="services-page"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Sibling Support
              </a>
            </li>
            <li>
              <a
                href="/services"
                aria-label="services-page"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Night Doula Care
              </a>
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
</div>




          <a href="/about" aria-label="about-page" className={linkClass("/about")}>
            About
          </a>
          <a href="/pricing" aria-label="pricing-page" className={linkClass("/pricing")}>
            Pricing
          </a>
          <a href="/faq" aria-label="faq-page" className={linkClass("/faq")}>
          FAQ
          </a>

          <a
          aria-label="contact-page"
            href="/contact"
            className={`px-6 py-2 rounded transition text-sm font-semibold text-white ${
              isActive("/contact") ? "bg-pr" : "bg-pr_btn hover:bg-pr_btn"
            }`}
          >
            Contact Us
          </a>
        </nav>


        <button
          onClick={() => setShowSideMenu(true)}
          className="lg:hidden text-black text-3xl"
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>



      </div>
      <Sidebar visible={showSideMenu} onHide={()=>setShowSideMenu(false)}>
<div class=" justify-end mb-4">
      <button name="side-bar" className="text-gray-500 hover:text-red-600 text-xl">

      </button>
    </div>


    <a aria-label="logo" href="/">
      <img className="w-auto h-13" src="images/updates-logo.jpeg" alt="Logo"/>
    </a>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav class="-mx-3 space-y-6">
        <div class="space-y-3">
          <label class="px-3 text-xs text-gray-500 uppercase"></label>

          <a aria-label="Home page"  class={`px-3 py-2 rounded-lg ${isActive("/") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`} href="/">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="..." />
            </svg>
            <span  class="ml-2 text-sm">Home</span>
          </a>

          <a aria-label="See what services we do offer"   class={`px-3 py-2 rounded-lg ${isActive("/services") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`} href="/services">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="..." />
            </svg>
            <span class="ml-2 text-sm">Services</span>
          </a>
          <a aria-label="Who are nested nurturers check more about us"   class={`px-3 py-2 rounded-lg ${isActive("/about") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`} href="/about">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="..." />
            </svg>
            <span class="ml-2 text-sm">About</span>
          </a>
          <a aria-label="Check our frequently asked question"  class={`px-3 py-2 rounded-lg ${isActive("/faq") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`} href="/faq">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="..." />
            </svg>
            <span class="ml-2 text-sm">FAQ</span>
          </a>

          <a aria-label="Check our affordable pricing"  class={`px-3 py-2 rounded-lg ${isActive("/pricing") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`} target="_blank" href="/pricing">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="..." />
            </svg>
            <span class="ml-2 text-sm">Pricing</span>
          </a>

          <a aria-label="Contact Us to get a free consultation" class={`px-3 py-2 rounded-lg ${isActive("/contact") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`} target="_blank" href="/contact">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="..." />
            </svg>
            <span class="ml-2 text-sm">Contact Us</span>
          </a>

        </div>
      </nav>
    </div>



</Sidebar>

    </header>
  );
}
