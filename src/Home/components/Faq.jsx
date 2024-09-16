import React, { useState } from "react";
const faqList = [
  {
    id: "1",
    question: "What is BETTO.ai?",
    answer:
      "BETTO.ai is a cutting-edge sports betting platform that utilizes advanced AI and machine learning technologies to provide accurate betting picks and strategies",
  },
  {
    id: "2",
    question: "How does BETTO.ai ensure the best odds?",
    answer:
      "Our AI system continuously scans hundreds of bookmakers to find and compare the best odds available, ensuring you always get the most profitable betting opportunities.",
  },
  {
    id: "3",
    question: "Is BETTO.ai free to use?",
    answer:
      "Our AI chatbot is free for a limited number of responses. For continued access and advanced features, a premium membership is required. ",
  },
  {
    id: "4",
    question: "Is BETTO.ai legal to use for betting?",
    answer:
      "Yes, BETTO.ai operates within legal boundaries and is registered with all applicable regulatory bodies. Please ensure you are in a region where online betting is legal before using our services.",
  },
  {
    id: "5",
    question: "What sports does BETTO.ai cover?",
    answer:
      "BETTO.ai offers betting picks for a wide range of sports including football, basketball, baseball, tennis, horse racing, and more.",
  },
  {
    id: "6",
    question: "Can I use cryptocurrencies to place bets on BETTO.ai?",
    answer:
      "Yes, BETTO.ai supports betting with major cryptocurrencies like Bitcoin and Ethereum, providing a secure and anonymous way to bet.",
  },
  {
    id: "7",
    question:
      "What is the minimum deposit required to start betting on BETTO.ai?",
    answer:
      "The minimum deposit to start betting on BETTO.ai is $25, payable in Bitcoin or Ethereum.",
  },
  {
    id: "8",
    question: "How often does BETTO.ai update its betting odds?",
    answer:
      "BETTO.ai updates odds in real-time, leveraging our AI technology to ensure you have the most current and competitive odds available.",
  },
  {
    id: "9",
    question: "What types of bets can I place on BETTO.ai?",
    answer:
      "BETTO.ai supports a variety of bet types including singles, accumulators, system bets, and live betting across all sports categories.",
  },
  {
    id: "10",
    question: "How does BETTO.ai protect my personal information?",
    answer:
      "We prioritize user security with advanced encryption and compliance with GDPR. Your data is securely processed and never shared with third parties without your consent.",
  },
  {
    id: "11",
    question: "What happens if there is a dispute about a bet?",
    answer:
      "In case of a dispute, please contact our support team immediately. We review disputes thoroughly and aim to resolve them in accordance with fair betting practices.",
  },
  {
    id: "12",
    question: "Can I withdraw my winnings in cryptocurrency?",
    answer:
      "Yes, you can choose to withdraw your winnings in the same cryptocurrency used for depositing, ensuring a seamless and secure transaction process.",
  },
  {
    id: "13",
    question: "How do I contact customer support if I have an issue?",
    answer:
      "You can reach our customer support team via email, live chat on our website, or through our dedicated support channel on Discord. Our team is available 24/7 to assist you with any inquiries or issues.",
  },
];
export default function Faq() {
  const [faq, setFaq] = useState(null);
  return (
    <section className="faq">
      <div className="auto__container">
        <div className="faq__inner">
          <div className="faq__inner-content">
            <h2>Frequently asked Questions</h2>
            <p>
              The team is always available to answer any questions, but here
              we’ve answered some of the most common ones for you.
            </p>
            <a href="#" className="button primary">
              See More
            </a>
          </div>
          <div className="faq__inner-tabs">
            {faqList.map((item, index) => {
              return <FaqTab {...item} key={index} setFaq={setFaq} faq={faq} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const FaqTab = (props) => {
  return (
    <div className="faqTab">
      <div
        className={"faqTab__head " + (props.faq === props.id ? "active" : "")}
        onClick={() => {
          if (props.faq !== props.id) {
            props.setFaq(props.id);
          } else {
            props.setFaq(null);
          }
        }}
      >
        <h5>{props.question}</h5>
        <span></span>
      </div>
      <div
        className={"faqTab__body " + (props.faq === props.id ? "active" : "")}
      >
        <p>{props.answer}</p>
      </div>
    </div>
  );
};
