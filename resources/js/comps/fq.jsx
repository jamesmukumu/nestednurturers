import React from "react";

export const Fq = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is included in the Starter plan?", answer: "The Starter plan includes access to all basic features, 5GB of storage, and email support." },
    { question: "Do you offer a free trial?", answer: "Yes, we offer a 14-day free trial for all our plans. No credit card is required to start." },
    { question: "Can I switch plans later?", answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal." },
    { question: "How secure is my data?", answer: "We use industry-standard encryption and security protocols to ensure your data is safe and protected." },
    { question: "How does the 2% donation work?", answer: "We pledge to donate 2% of our annual revenue to environmental causes and non-profit organizations." },
    { question: "Can I integrate this platform with other tools?", answer: "Yes, we offer seamless integration with popular tools like Slack, Trello, and Google Workspace." },
    { question: "What makes your platform different?", answer: "Our platform is built with a focus on user experience, speed, and reliability." }
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
            We're here to help you and solve doubts. Find answers to the most
            common questions below.
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
