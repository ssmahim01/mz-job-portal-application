import { easeOut, motion } from "framer-motion";
import programmingTeam from "../../assets/team/programming-celebrate.jpg";
import officeTeam from "../../assets/team/office-team.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-lime-100 min-h-96 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse pl-24">
        <div className="flex-1">
          <motion.img
            animate={{ y: [50, 80, 50] }}
            transition={{ duration: 8, repeat: Infinity }}
            src={programmingTeam}
            className="w-72 border-l-8 border-b-8 border-purple-500 rounded-t-[32px] rounded-br-[32px] shadow-xl"
          />

          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 8, repeat: Infinity }}
            src={officeTeam}
            className="w-72 border-r-8 border-t-8 border-purple-500 rounded-t-[32px] rounded-br-[32px] shadow-xl"
          />
        </div>
        <div className="flex-1 pr-20">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="md:text-5xl text-3xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            for You!
          </motion.h1>
          <p className="py-6 text-gray-600 font-semibold">
            Job is the crucial thing in our life. Anyone can get job by their
            hard work with perseverance. But, few job seekers do not find easily
            any job for apply. We are providing best job posts in our website to
            know about any jobs and explore.
          </p>
          <Link to="/jobs">
            {" "}
            <button className="btn bg-teal-600 text-lg text-white font-bold rounded-full px-8">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
