import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return items within 30 days of purchase for a full refund."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support through chat and email."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking number provided in the confirmation email."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fq flex items-center  m-20 justify-center mt-16 min-h-screen "> {/* Centering the container */}
      <div className="w-1/2 p-6 mt-8 bg-white rounded-lg shadow-md"> {/* Added background color and rounded corners */}
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0">
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-gray-500 cursor-pointer">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <p className="p-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
