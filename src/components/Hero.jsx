import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section 
      ref={ref}
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="hero"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/20"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-secondary-100/20 to-transparent dark:from-secondary-900/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            <span className="text-primary-600 dark:text-primary-400">Monetize</span> Your Unused Software Licenses
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Turn your unused software licenses into cash with our secure, transparent and efficient resale platform. Get the most value for your software assets.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-md shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sell My Licenses
            </motion.a>
            
            <motion.a
              href="#how-it-works"
              className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium px-8 py-3 rounded-md shadow-md hover:bg-gray-50 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Stats/Social Proof */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-400">Businesses Served</p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">$2.5M+</h3>
            <p className="text-gray-600 dark:text-gray-400">Recovered Value</p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">4.9/5</h3>
            <p className="text-gray-600 dark:text-gray-400">Customer Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero