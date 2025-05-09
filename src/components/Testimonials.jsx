import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechCorp Solutions',
    quote: 'SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was straightforward and their valuation was better than competitors by 15%.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CFO',
    company: 'Nexus Innovations',
    quote: 'As we transitioned to new software solutions, SoftSell provided a way to offset costs by selling our old licenses. Their team was professional and the payment was prompt.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Operations Manager',
    company: 'Global Dynamics',
    quote: 'The security of the platform gave us confidence that our license information was handled professionally. I was impressed by the quick turnaround from valuation to payment.',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      ref={ref}
      id="testimonials" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-primary-600 dark:text-primary-400">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden pb-10">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                initial={false}
                animate={{ x: `-${activeIndex * 100}%` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full px-4"
                  >
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-md">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-400"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <svg className="text-primary-200 dark:text-primary-800 w-12 h-12 absolute -top-6 -left-2 opacity-40" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
                        </svg>
                        <p className="text-lg text-gray-700 dark:text-gray-300 italic relative z-10 pl-4">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center gap-3 mt-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </motion.button>
              
              {/* Dots */}
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeIndex === index
                        ? 'bg-primary-600 dark:bg-primary-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-md shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Satisfied Customers
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials