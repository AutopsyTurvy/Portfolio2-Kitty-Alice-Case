

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
          So far, I've had the privilege of diving into HTML, CSS, JavaScript—but I wait with bated breath to also delve into
          other frameworks that can expand my toolkit and allow me to bring my creative visions to life. I expect my
          educational journey and future career to be one of constant growth and endless curiosity.
          <br />
          Despite what feels like a short first year, we have already completed three projects, and I am looking forward to
          the next twelve months of increasing skill and knowledge. I enjoy trying to incorporate illustration into my work,
          and I intend to develop this as my education progresses—hopefully with more and more finesse! I aim to further refine
          my skills and contribute to projects that make the digital world a more inclusive, beautiful, and engaging place.
        </p>

        <p className="about-paragraph">
          <br />
          I still keep my artwork close by, of course. If I get a break from schoolwork, I still dust off the pencils or
          sewing machine. I can't be sitting at a desk all day without quilts, blankets, cozy artwork, or comfortable dresses,
          can I? I also recently started dipping into animation!
          <br />
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
