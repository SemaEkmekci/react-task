import React from 'react';

const About = () => {
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 mt-8" id="about">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">About us</h2>
            <div className="mx-auto ">
                <span className="text-sm text-gray-500">
                    Comfort is key and how you feel about your chair will <br /> affect how you feel and your mood.
                </span>
            </div>
            <div className="grid grid-cols-1 gap-4 flex sm:grid-cols-2">
                <div className="grid-cols-2">
                    <div className="w-full pt-8 sm:w-64 h-auto sm:h-48 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-orange-500 text-6xl font-bold leading-10">1</div>
                        <div className="text-black text-2xl font-bold leading-normal">Mission</div>
                        <div className="text-stone-300 text-xl font-normal leading-loose">It makes people at ease and feel like they want to open up.</div>
                    </div>

                    <div className="w-full pt-8 sm:mt-20 sm:w-64 h-auto sm:h-48 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-orange-500 text-6xl font-bold leading-10">2</div>
                        <div className="text-black text-xl font-bold leading-normal">Motivation</div>
                        <div className="text-stone-300 text-xl font-normal leading-loose">The perfect mix of art that complements the rooms style.</div>
                    </div>

                    <div className="w-full pt-8 mt-20   sm:w-64 h-auto sm:h-48 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-orange-500 text-6xl font-bold leading-10">3</div>
                        <div className="text-black text-2xl font-bold leading-normal">Vision</div>
                        <div className="text-stone-300 text-xl font-normal leading-loose">Along with a healthy dose of negative space to give the eyes spots to rest.</div>
                    </div>

                    <div className="w-full pt-8 mt-20 sm:w-64 h-auto sm:h-48 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-orange-500 text-6xl font-bold leading-10">4</div>
                        <div className="text-black text-2xl font-bold leading-normal">Goal</div>
                        <div className="text-stone-300 text-xl font-normal leading-loose">Art that has meaning to the people who live in the space.</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 flex mb-8">
                    <div className="grid-cols-1 sm:mt-0">
                        <img className="w-full mt-20 sm:w-64 h-auto sm:h-96 " src="https://via.placeholder.com/270x370" alt="Image 1" />
                        <img className="w-full sm:w-64 h-auto sm:h-40 mt-4 sm:mt-8" src="https://via.placeholder.com/270x157" alt="Image 4" />
                    </div>
                  
                    <div className="grid-cols-1 mt-4 sm:mt-0">
                        <img className="w-full sm:w-64 h-auto sm:h-64" src="https://via.placeholder.com/270x270" alt="Image 2" />
                        <img className="w-full sm:w-64 h-auto sm:h-64 mt-4 sm:mt-8" src="https://via.placeholder.com/270x270" alt="Image 3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
