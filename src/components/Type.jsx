  import React from "react";
  import Typewriter from "typewriter-effect";
  import PropTypes from 'prop-types';
  function Type() {
    return (
      <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent pb-[5px]">
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer", "UI/UX Design Enthusiast", "Continuous Learner"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          cursorClassName: PropTypes.string,
          
        }}
      />
      </div>
    );
  }

  export default Type;