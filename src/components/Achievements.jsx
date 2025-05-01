import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCode, FaGraduationCap } from "react-icons/fa";

const AchievementCard = ({ achievement, index }) => {
  const icons = {
    academic: <FaGraduationCap className="text-2xl" />,
    coding: <FaCode className="text-2xl" />,
    award: <FaTrophy className="text-2xl" />,
    recognition: <FaMedal className="text-2xl" />,
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

      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent-cyan-light/10 dark:bg-accent-cyan/10 rounded-lg text-accent-cyan-light dark:text-accent-cyan">
          {icons[achievement.type]}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {achievement.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {achievement.description}
          </p>
          {achievement.details && (
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {achievement.details}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Dean's Top 10%",
      description: "Recognized for outstanding academic performance",
      details: "Awarded for being among the top 10% students at the University based on academic excellence and extracurricular involvement",
      type: "academic"
    },
    {
      title: "DSA Problem Solver",
      description: "Solved 200+ Data Structures & Algorithms problems",
      details: "Active on LeetCode with consistent problem solving in various difficulty levels",
      type: "coding"
    }
  ];

  return (
    <section id="achievements" className="py-12 relative">
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
            Achievements
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan-light to-accent-teal-light dark:from-accent-cyan dark:to-accent-teal mx-auto rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Highlights of my academic and professional accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              achievement={achievement} 
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
            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing." 
            <span className="block mt-2">- Pelé</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;