import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="Navbar">
        {/* Slidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}>
            </motion.span>
            
            
            {/* <div className="social">
                <a href="#"><img src="./social/facebook.svg" alt="" /></a>
                <a href="#"><img src="./social/insta.svg" alt="" /></a>
                <a href="#"><img src="./social/linkedin.svg" alt="" /></a>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar