import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 200 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials</span></h1>
            <p className='text-gray-500 text-center max-w-80 mb-12 mx-auto'>Real Stories from those who found the perfect homes here</p>

            <div className='flex flex-wrap gap-8 justify-center'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex gap-1 justify-center mb-4 text-red-500'>
                            {Array.from({ length: testimonial.rating }, (_, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
