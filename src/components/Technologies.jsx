import { RiAngularjsFill, RiReactjsLine, RiTailwindCssFill} from "react-icons/ri"
import { FaFigma , FaNodeJs } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },
    },

});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-7xl text-white"/>
            </motion.div>
            <motion.div variants={iconVariants(2.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiAngularjsFill className="text-7xl text-red-700"/>
            </motion.div>
           
            <motion.div
            variants={iconVariants(1.8)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl text-white"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies