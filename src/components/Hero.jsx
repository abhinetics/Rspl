import React from 'react'
import { IoIosSettings } from "react-icons/io";
import SavingCalc from './SavingCalc';
import Wave from './Wave';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <div className='container'>

        <section className="lefttxt">
        {/* Card */}
        {/* <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum  ipsum dolor sit amet consectetur adipisipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus quia reiciendis sint, distinctio totam expedita consequatur voluptate unde minus non exercitationem ex excepturi vel, recusandae a animi magnam! Dolor ipsum alias sunt, officiis rerum, perspiciatis quibusdam aspernatur laudantium vero soluta recusandae quo uam accusamus. </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div> */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

       
        className='q1' >Do not save what is left after spending, but spend what is left after saving 
          <br /> <br /> ~Warren Buffet~
      </motion.h2>
        <SavingCalc />
        </section>


        <section className="righttxt">
        {/* form */}
        {/* <form>

            <h1 className='contact-us-txt' >Contact Us</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />

            <input type="text" placeholder="Message"  />
            <button className='send-btn btn-11' >Sumbit</button>
        </form> */}
          <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='contact-form'
    >
      <h1 className='contact-us-txt'>Contact Us</h1>
      <motion.input
        type="text"
        placeholder="Name"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}

      />
      <motion.input
        type="text"
        placeholder="Email"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      />
      <motion.input
        type="text"
        placeholder="Phone"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      />
      <motion.input
        type="text"
        placeholder="Message"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      />
      <motion.button
        className='send-btn btn-11'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        Submit
      </motion.button>
    </motion.form>

        </section>

        <Wave />

    </div>
  )
}

export default Hero