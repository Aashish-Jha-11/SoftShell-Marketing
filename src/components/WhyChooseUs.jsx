import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    id: 1,
    title: 'Maximum Value',
    description: 'Our market analysis ensures you get the highest possible value for your unused licenses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Secure Transfers',
    description: 'Enterprise-grade security protocols protect your license data and financial transactions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Fast Payments',
    description: 'Get paid within 48 hours of accepting our valuation, no long waits or complicated processes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Expert Support',
    description: 'Our team of license experts is available to assist you every step of the way.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
        <path d="M12 13v8" />
        <path d="M12 3v3" />
      </svg>
    ),
  },
]

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section 
      ref={ref}
      id="why-choose-us" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-primary-600 dark:text-primary-400">SoftSell</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            We've created the most efficient and secure platform for selling your unused software licenses.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Ready to recover value from your unused licenses?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Join hundreds of satisfied customers who have already monetized their software investments.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-md shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs