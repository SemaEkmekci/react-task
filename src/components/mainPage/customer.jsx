
import React from 'react';

const Customer = () => {
  return (
    <div className="bg-blue-500 text-white p-8" id="customer" style={{ backgroundColor: '#112B3C' }}>
<h2 className="text-4xl font-bold mb-8 mt-12">What do customers say...</h2>
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-8 ml-0 md:ml-40 mt-20">
    <div>
      <img
        className=" w-full md:w-[370px] h-[470px] rounded-[139px]"
        src="https://via.placeholder.com/370x470"
        alt="Customer testimonial"
      />
    </div>

    <div className="md:ml-8">
      <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
        <div className="text-4xl font-bold mb-4">Amazing service</div>
        <div className="text-xl text-opacity-80 mb-6">
          Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers.
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="text-orange-500 text-xl font-bold">Wade Warren</div>
          <div className="text-base text-opacity-80">Doctor</div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Customer;

