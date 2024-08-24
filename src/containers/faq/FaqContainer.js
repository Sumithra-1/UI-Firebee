/* External package import */
import React, { useState } from "react";
/* External package import */

/* custom styles */
import "./styles/faqStyles.css";
/* custom styles */

const FaqContainer = () => {
  const faqData = [
    {
      id: "1",
      question: "Is Firebee Safe?",
      answer: `Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety.`,
    },
    {
      id: "2",
      question: "How Does Firebee Work?",
      answer: `Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state. Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature. Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize. Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake. Firebee signal is 3000 times less powerful than a smartphone and completely safe to use.`,
    },
    {
      id: "3",
      question: "Will Firebee Fit on My Head?",
      answer: `Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.`,
    },
    {
      id: "4",
      question: "What If I Want the Signal to Stop?",
      answer: `Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.`,
    },
    {
      id: "5",
      question: "How do you charge Firebee?",
      answer: `Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in.`,
    },
  ];

  const [activeKey, setActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    if (activeKey === key) {
      setActiveKey(null); 
    } else {
      setActiveKey(key); 
    }
  };

  const renderArrow = (key) => {
    return activeKey === key ? "-" : "+";
  };
  return (
    <div className="bg-sesction2 w-100">
      <div className=" mt-3  container-space-faq">
        <h3 className="font-weight-normal mb-4">Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
          {faqData.map((item) => (
            <div className="accordion-item" key={item.id}>
              <hr className="mb-0 font-weight-bold thick-hr" />
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded={activeKey === item.id}
                  aria-controls={`collapse${item.id}`}
                  onClick={() => toggleActiveKey(item.id)}
                >
                  <p className="mb-0 w-100 font-16 font-weight-bold">
                    {item.question}
                    <span className="float-right font-18">
                      {renderArrow(item.id)}
                    </span>
                  </p>
                </button>
              </h2>
              <div
                id={`collapse${item.id}`}
                className={`accordion-collapse collapse ${
                  activeKey === item.id ? "show" : ""
                }`}
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
