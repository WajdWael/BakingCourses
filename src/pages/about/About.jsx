import about1 from '/public/about-img-1.png'
import about2 from '/public/about-img-2.png'
import about3 from '/public/about-img-3.png'

import './About.css'

const About = () => {
  return  <section className="about container">
    <section className="col1">
        <div className="content">
            <h5 className="about-subtitle">About Me</h5>
            <h1 className="main-title">I am Nicole, a professional baker with over 10 years of experience</h1>
        </div>
        <div className="about-images">
            <img className="standered-img" src={about1} alt="cook" />
            <img className="standered-img about2" src={about2} alt="cook" />
        </div>
    </section>
    <section className="col2">
        <div className="about-images">
            <img className="standered-img" src={about3} alt="face" />
        </div>
        <div className="content">
            <h4 className="about-title">Vulputate egestas nullam volutpat diam nisi at venenatis adipiscing massa posuere massa nulla massa id integer.</h4>
            <p className="main-title-paragraph">Cras ullamcorper fermentum arcu in sed fermentum velit nulla scelerisque pharetra tristique lectus justo faucibus purus est purus gravida nibh odio ante.</p>
            <button className="outline-button">MORE ABOUT ME</button>
        </div>
    </section>
  </section>
}

export default About