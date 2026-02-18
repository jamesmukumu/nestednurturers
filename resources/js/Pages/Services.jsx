import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";
import { Seo } from "@/comps/SEO";
import { useState } from "react";
export default function Services() {
    const [services, setServices] = useState([
       
        {
            image: "images/services/mom-holds-happy-baby-while-drinking-coffee.jpg",
            title: "Postpartum Doula Services",
            description: `We offer holistic day doula, overnight doula and newborn care specialist services personalized care to support your physical and emotional well-being during the postpartum period.

            We assist with newborn care, infant soothing, feeding support, and light household help, ensuring you feel confident, rested, and supported as you transition into parenthood.`,
        },
         {
            image: "images/services/mom-and-baby-boy-1-e1634546528976.jpg",
            title: "Birth Doula Support",
            description:
                "Our birth doula services are designed to provide continuous emotional, physical, and informational support throughout pregnancy, labor, and delivery. We help you feel confident and prepared by offering personalized birth planning, comfort techniques, breathing guidance, and advocacy during labor. Whether you’re planning a hospital birth, birth center experience, or home birth, our trained doulas are by your side every step of the way. From early labor support to immediate postpartum care, we are committed to creating a calm, empowering birth experience for you and your family.",
        },

        {
            image: "images/services/black-mother-taking-car-her-child.jpg",
            title: "Sibling Doula Support",
            description:
                "Welcoming a new baby can be a big transition for older siblings. Our sibling doula support helps children feel included and cared for during this exciting time. We provide gentle guidance, fun engagement, and reassurance, allowing parents to focus on labor, recovery, and bonding with the new baby while knowing their other children are supported with love and care.",
        },
      
        {
            image: "images/services/Sleeper.jpg",
            title: "Sleep Training Consultation & Support",
            description:
                "We understand how challenging sleep can be for both parents and babies. Our sleep training consultation services offer customized solutions to address your child’s sleep needs. From gentle sleep methods to establishing healthy sleep habits, we work with you to create a plan that fits your family’s goals and lifestyle, ensuring peaceful nights and well-rested days.",
        },

        {
            image: "images/services/postpartum-doula-support-services.jpg",
            title: "Special Needs Sleep Support",
            description:
                "Every child is unique, and some little ones need extra care when it comes to sleep. Our special needs sleep consultations are tailored to children with developmental or medical considerations. We provide compassionate, adaptive strategies to support your child`s individual needs, helping the whole family get better rest",
        },
       
        {
            image: "images/services/discussing-their-hopes-dreams-group-pregnant-women-sitting-down-together-share-their-feelings_590464-13892.jpg",
            title: "Childbirth Education",
            description: `Our childbirth education classes are designed to prepare you for a confident and informed birth experience. We provide evidence-based guidance on the stages of labor, pain management techniques, breathing exercises, partner support, and postpartum preparation. Whether you're planning a hospital, birth center, or home birth, our classes equip you with the knowledge and tools needed to approach labor and delivery with clarity and confidence.`,
        },
    
        {
            image: "images/services/Sign.jpg",
            title: "Baby Sign Language",
            description: `Our baby sign language classes help infants and toddlers communicate their needs before they can speak. Through simple, developmentally appropriate signs, we guide parents in teaching their babies how to express hunger, emotions, and everyday needs. This early communication approach can reduce frustration, strengthen bonding, and support language development in a fun and engaging way for the whole family.`,
        },
        {
            image: "images/services/Potty.jpg",
            title: "Potty Training",
            description: `Our potty training support provides parents with practical, step-by-step guidance to help toddlers transition confidently out of diapers. We offer personalized strategies based on your child’s readiness, temperament, and developmental stage. From creating consistent routines to managing setbacks, we support you with positive reinforcement techniques that make the potty training process smoother and less stressful for the whole family.`,
        },
    ]);
    return (
        <div>
            <Seo
                title="Our Services"
                description="At Nested Nurturers, we provide compassionate prenatal, birth, and postpartum doula support for families in the Bay Area, California. Our personalized care helps parents feel confident, supported, and empowered during the early stages of parenthood"
                url="/services"
            />
            <Header />
            <section className="relative w-full py-4 h-[500px] flex items-center justify-center">
                <img
                    src="images/services/cheerful-smiling-mother-and-little-baby-kid-child.jpg"
                    alt="Birth and Postpartum Support"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                <div className="relative z-10 text-center px-6 max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Birth &amp; Postpartum Support Services
                    </h1>
                    <p className="text-lg md:text-2xl text-white mb-8 leading-relaxed">
                        At Nested Nurturers, we are dedicated to providing
                        families with the essential support they need to
                        flourish during the early stages of parenthood.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-pr_btn mb-2 hover:bg-pr_btn text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                    >
                        BOOK YOUR CONSULTATION
                    </a>
                </div>
            </section>

            <section className="py-24 bg-white w-full">
                <div className="w-full mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-5xl font-light text-gray-900 mb-4 tracking-wide">
                            What We Offer
                        </h2>
                        <p className="pt-5 leading-relaxed text-lg text-gray-700">
                            At Nested Nurturers, we are dedicated to providing
                            families with the essential support they need to
                            flourish during the early stages of parenthood. Our
                            services are carefully crafted to nurture both
                            parents and babies, ensuring that you feel
                            confident, empowered, and connected as you begin
                            this incredible journey
                        </p>
                        <div className="w-32 h-px bg-[#8B7355]/60 mx-auto mt-6"></div>
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap justify-start w-full">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center px-2 py-2 text-center flex-[0_0_33.333%] md:max-w-[33.333%]"
                            >
                                <a
                                    href="/contact"
                                    className="flex flex-col items-center text-center h-full"
                                >
                                    <div className="relative overflow-hidden mb-4 h-64 w-full">
                                        <img
                                            src={service.image}
                                            alt="Mama-Ngina-Front"
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                                        {service.description}
                                    </p>
                                    <a
                                        href="/contact"
                                        className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-pr_btn text-white font-semibold rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
                                    >
                                        Book Now
                                    </a>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <Contact />
            </section>
            <Footer />
        </div>
    );
}
