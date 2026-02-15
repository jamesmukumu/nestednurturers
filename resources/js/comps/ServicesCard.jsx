import { useState } from "react";

export function ServiceCard() {
    const [services, setServices] = useState([
        {
            image: "images/services/mom-and-baby-boy-1-e1634546528976.jpg",
            title: "Birth Doula Support",
            description:
                "Our birth doula services are designed to provide continuous emotional, physical, and informational support throughout pregnancy, labor, and delivery. We help you feel confident and prepared by offering personalized birth planning, comfort techniques, breathing guidance, and advocacy during labor. Whether you’re planning a hospital birth, birth center experience, or home birth, our trained doulas are by your side every step of the way. From early labor support to immediate postpartum care, we are committed to creating a calm, empowering birth experience for you and your family.",
        },
        {
            image: "images/services/mom-holds-happy-baby-while-drinking-coffee.jpg",
            title: "Postpartum Doula Services",
            description: `We offer day and night doula care, with all our doulas fully trained, certified, vetted, and specialized in newborn care. Our holistic support includes infant soothing, breastfeeding guidance, and light household tasks such as meal preparation—helping nurture your physical and emotional well-being while easing your transition into parenthood.`,
        },

        {
            image: "images/services/black-mother-taking-car-her-child_23-2149836804.jpg",
            title: "Sibling Doula Support",
            description:
                "Welcoming a new baby can be a big transition for older siblings. Our sibling doula support helps children feel included and cared for during this exciting time. We provide gentle guidance, fun engagement, and reassurance, allowing parents to focus on labor, recovery, and bonding with the new baby while knowing their other children are supported with love and care.",
        },

        {
            image: "images/services/birth-labor-doula-support-services.jpg",
            title: "Sleep Training Consultation & Support",
            description:
                "We understand how challenging sleep can be for both parents and babies. Our sleep training consultation services offer customized solutions to address your child’s sleep needs. From gentle sleep methods to establishing healthy sleep habits, we work with you to create a plan that fits your family’s goals and lifestyle, ensuring peaceful nights and well-rested days.",
        },
    ]);
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row flex-wrap justify-start w-full">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-3 px-2 py-2 text-center flex-[0_0_33.333%] md:max-w-[33.333%]"
                    >
                        <a
                            href="/contact"
                            className="flex flex-col items-center text-center h-full 
        rounded-2xl overflow-hidden shadow-md 
        hover:shadow-xl transition-all duration-300"
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
    );
}
