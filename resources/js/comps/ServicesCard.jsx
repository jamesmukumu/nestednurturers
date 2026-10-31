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
            description: `We offer holistic day doula, overnight doula and newborn care specialist services personalized care to support your physical and emotional well-being during the postpartum period. We assist with newborn care, infant soothing, feeding support, and light household help, ensuring you feel confident, rested, and supported as you transition into parenthood.`,
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
                            className="flex h-full w-full flex-col items-center overflow-hidden rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                            <div className="relative overflow-hidden mb-4 h-64 w-full">
                                <img
                                    src={service.image}
                                    alt="Mama-Ngina-Front"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <h3 className="mb-4 px-6 text-2xl font-light tracking-wide text-gray-900">
                                {service.title}
                            </h3>
                            <p className="flex-grow px-6 pb-5 text-lg leading-relaxed text-gray-600">
                                {service.description}
                            </p>
                            <a
                                href="/contact"
                                className="mb-6 mt-3 inline-flex items-center justify-center rounded bg-pr_btn px-6 py-3 font-semibold text-white shadow transition-transform hover:-translate-y-1 hover:shadow-lg"
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
