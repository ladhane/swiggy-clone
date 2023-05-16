import React, { useState, useEffect } from "react";

const Help = () => {
  const [faqs, setFaqs] = useState();
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    getFAQs();
    // eslint-disable-next-line
  }, []);

  const getFAQs = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/support/issues/faq");
    const data1 = await data.json();
    setFaqs(data1?.data?.issues?.data);
  };

  const handleFaqClick = (index) => {
    setActiveFaqIndex(index === activeFaqIndex ? null : index);
  };
  return (
    faqs && (
      <div className="grid grid-cols-6 bg-teal-700">
        <div className="col-start-2 col-span-4">
          <div className="p-5 font-bold text-2xl uppercase text-white ">
            Help
          </div>
          <div className="bg-white">
            {faqs.map((faq, index) => {
             return (faq.description || faq.hyperLink) && 
                <div className="p-8 pb-0" key={faq.title}>
                  <div className="flex justify-between w-full">
                    <h1 className="my-2">{faq.title}</h1>
                    <button
                      className="-end-0"
                      onClick={() => handleFaqClick(index)}
                    >
                      Show
                    </button>
                  </div>
                  {activeFaqIndex === index && (
                    <>
                      {faq.description && (
                        <h1 className="my-2">{faq.description}</h1>
                      )}
                      {faq.hyperLink && (
                        <h1 className="my-2">{faq.hyperLink}</h1>
                      )}
                    </>
                  )}
                  <div className="pt-8 border-b-2 border-gray-300"></div>
                </div>
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Help;
