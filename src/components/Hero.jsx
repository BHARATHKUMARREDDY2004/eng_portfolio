import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import ProfilePic from "../../public/images/ProfilePic.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Gradient Background - light mode aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-primary-dark dark:via-primary-dark dark:to-secondary-dark -z-10"></div>

      {/* Glowing Circles - light mode aware */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent-cyan/10 dark:bg-accent-cyan/20 rounded-full blur-[100px] -z-5"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-teal/10 dark:bg-accent-teal/20 rounded-full blur-[120px] -z-5"></div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10">
          <div className="glitch-wrapper mb-2">
            <p
              className="text-accent-cyan/80 dark:text-accent-cyan mb-2 font-medium glitch"
              data-text="Hello, I'm">
              Hello, I'm
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          Bharath Kumar Reddy{" "}
            <span className="text-accent-cyan/80 dark:text-accent-cyan">
              Vemireddy
            </span>
          </h1>

          <div className="overflow-hidden w-full mb-6">
            <h2 className="text-xl sm:text-2xl md:text-2xl text-gray-600 dark:text-gray-300 typewriter-container">
              <span className="typewriter">
                Full-Stack Developer & Machine Learning Enthusiast
              </span>
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg backdrop-blur-sm bg-white/40 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700/30 shadow-sm">
            I specialize in building scalable web applications and AI-powered
            solutions. Passionate about creating seamless user experiences and
            solving real-world problems with technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn relative overflow-hidden group bg-gradient-to-r from-accent-cyan/90 to-accent-teal/90 dark:from-accent-cyan dark:to-accent-teal text-white py-2 px-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/90 to-accent-cyan/90 dark:from-accent-teal dark:to-accent-cyan transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="btn border border-accent-cyan/70 dark:border-accent-cyan text-accent-cyan/80 dark:text-accent-cyan hover:text-white relative overflow-hidden group py-2 px-6 rounded-md shadow-sm hover:shadow-md">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/90 to-accent-teal/90 dark:from-accent-cyan dark:to-accent-teal transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
          </div>

          <div className="flex space-x-6">
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://github.com/BHARATHKUMARREDDY2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="GitHub">
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://www.linkedin.com/in/bharath-kumar-reddy-vemireddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="LinkedIn">
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://leetcode.com/u/BHARATH_970438/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="LeetCode">
              <SiLeetcode />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="mailto:vemireddybharathreddy90@gmail.com"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="Email">
              <MdEmail />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex lg:justify-center lg:items-center">
          {/* Profile Picture Container */}
          <div className="relative w-[400px] h-[400px]">
            {/* Profile Image */}
            <motion.div
              className="w-full h-full relative overflow-hidden"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <img
                src={ProfilePic}
                alt="Bharath Kumar Reddy Vemireddy"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
