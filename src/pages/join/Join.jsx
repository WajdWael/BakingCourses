import { FaArrowRight } from "react-icons/fa";
import './Join.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Join = () => {
    return <>
        <section className="signin container">
            <h5 className="signin-title">Courses</h5>
            <h1 className="main-title">Ready to bake like a pro at your own kitchen?</h1>
            <button className="outline-button">SIGN UP NOW <FaArrowRight className='standered-icon' /></button>
        </section>

        <section className="subscribe container">
            <div className="subscribe-cols">
                <section className="col1">
                    <h5 className="subscribe-title">Stay in the know</h5>
                    <h1 className="main-title">Subscribe mailing list</h1>

                    <form action="">
                        <input type="email" name="" id="" className="input" placeholder="Email address" />
                        <button className="outline-button">SUBSCRIBE</button>
                    </form>
                </section>
                <section className="col2">
                    <h5 className="subscribe-title">Follow me</h5>
                    <div className="subscribe-icons">
                        <div className="subscribe-icon-container">
                            <FaInstagram className='standered-icon'/>
                            <h6 className="subscribe-title">Instagram</h6>
                        </div>
                        <div className="subscribe-icon-container">
                            <FaFacebookSquare className='standered-icon' />
                            <h6 className="subscribe-title">Youtube</h6>
                        </div>
                        <div className="subscribe-icon-container">
                            <FaYoutube className='standered-icon' />
                            <h6 className="subscribe-title">Facebook</h6>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </>
}

export default Join