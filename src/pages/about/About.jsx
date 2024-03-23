// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    bannerImgOne1,
  } from "../../assets/images/index";
import Image from "../../components/designLayouts/Image";

const About = () => {
    return (
        <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative lg:max-w-md">
                            <Image imgSrc={bannerImgOne1} className="relative z-10 object-cover w-full rounded h-96" />
                            <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800">
                                <p className="text-lg font-semibold md:w-72">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10" viewBox="0 0 16 16">
                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                                    </svg> Successfully Providing business solutions from 45 years
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                        <div className="pl-4 mb-6 border-l-4 border-blue-500">
                            <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                             eFurniture
                            </h1>
                        </div>
                        <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                        With the desire to bring customers genuine sanitary equipment products from domestic and foreign manufacturers. 
                        We always listen and give customers sincere advice and sharing. Along with that is a quick and convenient purchasing and delivery process for customers. 
                        Always on time and on schedule - that is the commitment that Lofi Furniture wants to give to customers. 
                        Along with that is a commitment to product quality and service quality because we understand that customers are the survival of the company. 
                        With a team of experienced and well-trained consultants, we will give customers the most reasonable advice in finding and choosing the right types of sanitary equipment and tiles for their homes.
                        </p>
                        <a href="#"
                            className="px-4 py-3 text-blue-700 transition-all transform border border-blue-500 rounded-3xl hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100">
                            Discover more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
