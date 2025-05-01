import { motion } from "framer-motion";
import { FaCertificate, FaDatabase, FaCloud } from "react-icons/fa";

const CertificationCard = ({ certification, index }) => {
  const icons = {
    database: <FaDatabase className="text-2xl" />,
    cloud: <FaCloud className="text-2xl" />,
    default: <FaCertificate className="text-2xl" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-lightbg-secondary to-lightbg-tertiary dark:from-secondary-dark dark:to-secondary-dark/70 backdrop-blur-sm border border-gray-300 dark:border-gray-700/30 rounded-xl shadow-md dark:shadow-lg p-6 h-full relative group overflow-hidden">
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute h-[2px] top-0 left-0 bg-gradient-to-r from-transparent via-accent-cyan-light dark:via-accent-cyan to-transparent w-full group-hover:animate-border-top"></div>
          <div className="absolute h-[2px] bottom-0 right-0 bg-gradient-to-r from-transparent via-accent-teal-light dark:via-accent-teal to-transparent w-full group-hover:animate-border-bottom"></div>
          <div className="absolute w-[2px] top-0 right-0 bg-gradient-to-b from-transparent via-accent-cyan-light dark:via-accent-cyan to-transparent h-full group-hover:animate-border-right"></div>
          <div className="absolute w-[2px] bottom-0 left-0 bg-gradient-to-b from-transparent via-accent-teal-light dark:via-accent-teal to-transparent h-full group-hover:animate-border-left"></div>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent-cyan-light dark:bg-accent-cyan rounded-full opacity-0 blur-xl group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700"></div>

      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-accent-cyan-light/10 dark:bg-accent-cyan/10 rounded-lg text-accent-cyan-light dark:text-accent-cyan">
            {icons[certification.type] || icons.default}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {certification.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {certification.issuer}
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center text-sm">
            <span className="px-3 py-1 bg-accent-teal-light/10 dark:bg-accent-teal/10 text-accent-teal-light dark:text-accent-teal rounded-full">
              {certification.date}
            </span>
            {certification.credential && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={certification.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-accent-cyan-light/10 dark:bg-accent-cyan/10 text-accent-cyan-light dark:text-accent-cyan rounded-full hover:underline">
                View Credential
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB University",
      date: "07-12-2024",
      type: "database",
      credential: "https://learn.mongodb.com/c/U_baGFjyRd66zkX-lT8GJw" // Add your actual credential URL here
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2023", // Add completion date if available
      type: "cloud",
      credential: "#" // Add your actual credential URL here
    }
  ];

  return (
    <section id="certifications" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-lightbg-primary via-lightbg-secondary to-lightbg-tertiary dark:from-primary-dark dark:via-primary-dark dark:to-secondary-dark -z-10"></div>

      <div className="container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan-light to-accent-teal-light dark:from-accent-cyan dark:to-accent-teal inline-block"
            animate={{
              textShadow: document.documentElement.classList.contains("dark")
                ? [
                    "0 0 10px rgba(3, 218, 198, 0.2)",
                    "0 0 20px rgba(3, 218, 198, 0.4)",
                    "0 0 10px rgba(3, 218, 198, 0.2)",
                  ]
                : [
                    "0 0 10px rgba(0, 137, 123, 0.1)",
                    "0 0 15px rgba(0, 137, 123, 0.2)",
                    "0 0 10px rgba(0, 137, 123, 0.1)",
                  ],
            }}
            transition={{ duration: 2, repeat: Infinity }}>
            Certifications
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan-light to-accent-teal-light dark:from-accent-cyan dark:to-accent-teal mx-auto rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Verified credentials demonstrating my expertise in various technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={index} 
              certification={certification} 
              index={index} 
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}>
          <p className="text-gray-600 dark:text-gray-400 italic">
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
            <span className="block mt-2">- Brian Herbert</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;