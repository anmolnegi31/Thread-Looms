import { motion } from "framer-motion";

const variants = {
  open:{
    transition:{
      staggerChildren:0.1
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1,
    }
  }
}
const itemVariants = {
  open:{
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  }
}

const Links = () => {
  const items = ["Homepage", "Services", "Contact", "About", "FAQ"];
  const items2 = ["Login", "SignUp"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {item}
        </motion.a>
      ))}
      <motion.span className="login-signup" variants={variants}>
        {items2.map((item2) => (
          <motion.a href={`#${item2}`} key={item2} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {item2}
          </motion.a>
        ))}
      </motion.span>
    </motion.div>
  )
}

export default Links