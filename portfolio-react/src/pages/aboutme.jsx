

// portfolio-react/src/pages/aboutme.jsx




import "../styles/aboutme.css";

export default function AboutMe() {
  return (
    <div className="about-container">

      
      <div className="about-text">
        <img className="hello" src="/images/hello2.png" alt="Hello- a handwritten greeting" />

        <p className="about-paragraph">
          Hello there! 
          <br />
          My name is Kitty (or Alice, if you like!) - I am a Front-End Development student at Noroff school in Norway!
          <br />
          Coding was a life-changing decision after many years spent as an artist, and I find the creative potential so exciting!
          The journey from paper to pixels was a huge jump for me, especially as someone who is habitually described as
          "Victorian" by friends and teachers, but now I stand before you—a thoroughly chaotic, but passionate Front-End
          Development Student!
          <br />
          March marks the end of our Journet with Noroff school, and what a journey is has been! 
          We've gone into Bootstrap, Tailwind, React, CSS Modules and a wonderful variety of frameworks- Usually we had the choice so that 
          we could form a preference, and I fall happily on the side of CSS Modules, but with all of the options, 
          that may easily change depending on the project.
          
          <br />

          Where my journey leads now, who can say? I will be looking into freelance coding opportunities for further experience,
          and expanding on my own style!
          I aim to further refine my skills and contribute to projects that make the digital world a more inclusive, beautiful, and engaging place.
        </p>

        <p className="about-paragraph">
         
          <br />
          <strong>Let's Connect!</strong>
          <br />
          I'm always on the lookout for new challenges, collaborations, and opportunities to learn. Since I learn best through
          connection with others, why not reach out?
          <br />
          <br />
          You can find my email here, or you can reach me via my GitHub profile below:
          <br />
          <br />
          <strong>kitty.letsbuzz@gmail.com</strong>
          <br />
          <br />
          To see what else I've been up to, please feel free to check out my GitHub Profile:
          <br />
          <br />
          <a href="https://github.com/AutopsyTurvy" className="github-about-link" target="_blank" rel="noopener noreferrer">
            To My Github Profile
          </a>
        </p>

        <img className="signed" src="/images/signature.png" alt="Signed by the creator" />
      </div>

      
      <img className="me" src="/images/aboutmeimage.png" alt="A picture of the creator" />
    </div>
  );
}
