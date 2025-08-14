import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Experience = () => {
    return (
        <section className='flex justify-center gap-16 text-black'>
            <div>
                <img src="/src/assets/experience.png" alt="" />
            </div>

            <div className='leading-10'>
                <h6 className='text-orange-500'>EXPERIENCE</h6>
                <h2 className='font-bold text-5xl max-w-[500px] my-4'>we provide you the best experience</h2>
                <p className='max-w-[460px] mb-4'>You don’t have to worry about the result because all of these interiors are made by 
                    people who are professionals in their fields with an elegant and lucurious style
                     and with premium quality materials</p>

                     
                              {/* View All */}
        <div className="mt-8">
          <a
            href="#"
            className="text-orange-500 font-medium inline-flex items-center gap-2 hover:underline"
          >
            View All <span>→</span>
          </a>
        </div>
                             </div>
                     
        </section>
    );
};

export default Experience;