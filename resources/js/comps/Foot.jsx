import { Toast } from "primereact/toast";
import React, { useState, useRef } from "react";

export function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const year = new Date().getFullYear();

    return (
        <footer class="bg-pr">
            <div class="container px-6 py-12 mx-auto">
                <div class=" md:-mx-3 md:items-center md:justify-between">
                    <h1 class="text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl">
                        Serving Bay Area And Beyond
                    </h1>
                    <p class="p-2 text-m font-semibold tracking-tight text-white md:mx-3 xl:text-xl">
                        We are trusted and approved by Carrot and Medi-Cal.
                    </p>
                </div>

                <hr class="my-6 border-white-200 md:my-10" />

                {/* Grid Sections */}
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Destinations */}
                    <div>
                        <h1 class="font-semibold text-xl text-white">
                            Quick Links
                        </h1>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="/"
                                aria-label="home-page"
                                class="transition-colors duration-300 text-white hover:underline"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                aria-label="about-page"
                                class="transition-colors duration-300 text-white hover:underline"
                            >
                                About
                            </a>
                            <a
                                href="/services"
                                aria-label="services-page"
                                class="transition-colors duration-300 text-white hover:underline"
                            >
                                Services
                            </a>
                            <a
                                href="/pricing"
                                aria-label="pricing-link"
                                class="transition-colors duration-300 text-white hover:underline"
                            >
                                Price
                            </a>

                            <a
                                href="/contact"
                                aria-label="contact-page"
                                class="transition-colors duration-300 text-white hover:underline"
                            >
                                Contact
                            </a>

                            <a
                                href="/contact"
                                aria-label="contact"
                                class="transition-colors duration-300 text-white hover:underline"
                            >
                                Career (Are you a doula? Contact us to serve our
                                community)
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p class="font-semibold text-xl text-white">Benefits</p>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a
                                target="_blank"
                                href="/services"
                                class="transition-colors text-white duration-300 hover:underline"
                            >
                                Carrot Fertility
                            </a>
                            <a
                                target="_blank"
                                href="/services"
                                class="transition-colors text-white duration-300 hover:underline"
                            >
                                Medi-cal
                            </a>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h1 class="text-xl font-semibold text-white">
                            Location
                        </h1>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a
                                target="_blank"
                                href="/"
                                class="transition-colors text-white duration-300 hover:underline"
                            >
                                Bay Area&Beyond
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h1 class="text-xl font-semibold text-white">
                            Connect with us
                        </h1>
                        <div class="flex items-center space-x-5 text-white">
                            <a href="https://www.facebook.com/nestednurturerz?mibextid=ZbWKwL">
                                <i class="fa-brands fa-facebook text-xl hover:text-pr transition"></i>
                            </a>
                            <a href="https://www.instagram.com/nestednurturersdoulas?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr">
                                <i class="fa-brands fa-instagram text-xl hover:text-pr transition"></i>
                            </a>
                            <a href="https://www.tiktok.com/@nestednurturersdoulas?_r=1&_t=ZT-91baqNofnZ1">
                                <i class="fa-brands fa-tiktok text-xl hover:text-pr transition"></i>
                            </a>
                            <a href="/">
                                <i class="fa-brands fa-yelp text-xl hover:text-pr transition"></i>
                            </a>
                        </div>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="tel:+1 (925) 316-8311"
                                class="text-white transition-colors duration-300 hover:underline"
                            >
                                +1 (925) 316-8311
                            </a>
                            <a
                                href="mailto:info@nestednurturers.com"
                                class="text-white transition-colors duration-300 hover:underline"
                            >
                                info@nestednurturers.com
                            </a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-between sm:flex-row">
                    <a href="/" class="mt-2">
                        <img
                            class="w-auto h-14"
                            src="images/bottom-logo.jpeg"
                            alt="logo"
                        />
                    </a>

                    <p class="mt-4 text-sm sm:mt-0 text-white">
                        © Copyright {year}.{" "}
                        <a class="underline text-white" href="/" target="blank">
                            NestedNurturers
                        </a>{" "}
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
