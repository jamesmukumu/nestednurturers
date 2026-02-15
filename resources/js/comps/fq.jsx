import React from "react";

export const Fq = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is postpartum doula?",
            answer: "A postpartum doula provides non-medical support for new parents, offering guidance on newborn care, breastfeeding, and emotional support, along with light household help.",
        },
        {
            question: "What Sleep Training Services Do You Offer?",
            answer: "We offer personalized pediatric sleep training consultations to help families establish healthy sleep routines and improve their child’s sleep habits with gentle, effective methods.",
        },
        {
            question: "How do i know if i need postpartum doula?",
            answer: "If you're feeling overwhelmed, need help adjusting to life with a new baby, or want extra support with feeding and baby care, postpartum doula services can offer guidance and reassurance.",
        },
        {
            question: "Do you offer breastfeeding support?",
            answer: "Yes, we offer breastfeeding guidance, including help with latch, milk supply, and overall feeding techniques",
        },
        {
            question: "What sleep training methods do you use?",
            answer: "We use gentle, evidence-based methods that focus on building positive sleep habits, creating a peaceful sleep environment, and minimizing stress for both parents and babies.",
        },
        {
            question: "How long does sleep training take to work?",
            answer: "Results typically appear within a few days to a couple of weeks, depending on your child's needs and consistency with the plan",
        },
        {
            question: "Do you provide overnight doula support?",
            answer: "Yes, we offer overnight support to help with feedings and soothing, allowing you to rest and recharge.",
        },
        {
            question: "How do I start sleep training?",
            answer: "Schedule a consultation, and we'll create a personalized sleep plan for your child and provide ongoing support to guide you through the process",
        },
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center py-16 px-4">
            <div className="w-full max-w-6xl">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
                        Most asked FAQ's
                    </h2>
                    <p className="text-neutral-700 max-w-xl mx-auto text-sm">
                        We're here to help you and solve doubts. Find answers to
                        the most common questions below.
                    </p>
                </div>

                {/* FAQ Flexbox in 2 cols */}
                <div className="flex flex-wrap -mx-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            className="w-full md:w-1/2 px-3 mb-4"
                        >
                            <div className="bg-slate-50 p-5 rounded-lg cursor-pointer transition-all duration-300 border border-slate-200 hover:bg-slate-100">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg md:text-xl font-bold text-neutral-900">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`text-slate-400 p-1 rounded transition-colors ${
                                            openIndex === index
                                                ? "bg-slate-200 text-slate-600"
                                                : "hover:bg-slate-300 hover:text-slate-500"
                                        }`}
                                    >
                                        {openIndex === index ? (
                                            <i className="fa-solid fa-minus"></i>
                                        ) : (
                                            <i className="fa-solid fa-plus"></i>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        openIndex === index
                                            ? "max-h-40 mt-3 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
