import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () => {
    return <footer className="footer">
        <section className="footer-links">
            <div className="container">
                <section className="footer-boxes">
                <div className="box">
                    <Link to='/' className="logo">BakingNicole</Link>
                    <p className="main-title-paragraph">Duis nulla eleifend tincidunt cum amet id mi, sodales amet ut non habitant accumsan risus, malesuada sit nibh consectetur rutrum quis augue.</p>
                </div>
                <div className="box">
                    <h1 className="footer-box-title">About Us</h1>
                    <p className="main-title-paragraph">
                    My Story <br />
                    My Expertise <br />
                    My Awards & Honors <br />
                    My News & Blog <br />
                    </p>
                </div>
                <div className="box">
                    <h1 className="footer-box-title">My Offering</h1>
                    <p className="main-title-paragraph">
                    123 Fifth Avenue, New York, NY 12004. <br />
                    United States. <br />
                    mail@example.com <br />
                    +01 – 123 456 78 90 <br />
                    </p>
                </div>
                </section>
            </div>
        </section>
        <section className="footer-credits container">
        <h4 className="main-title-paragraph">
            developed by @Wajd
            <a href="https://www.linkedin.com/in/wajd-wael-345465230/" className="link-styles">Learn More</a>
        </h4>
        <h4 className="main-title-paragraph">Powered by Learn Baking</h4>
        </section>
    </footer>
}

export default Footer