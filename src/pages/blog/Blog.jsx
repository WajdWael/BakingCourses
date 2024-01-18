import './Blog.css'
import { FaArrowRight } from "react-icons/fa";

const blogsPosts = [
    {
        title: 'Diam aliquam sapien lorem dapibus in',
        content: 'Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet facilisis pharetra, pharetra dolor scelerisque.',
    },
    {
        title: 'Sem volutpat nec bibendum nec viverra rutrum',
        content: 'Ipsum amet, ultrices suscipit eu eget tortor a, tincidunt urna, mattis aliquam duis eget luctus id.',
    },
    {
        title: 'Congue faucibus magna in',
        content: 'Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis scelerisque sagittis, quam vitae.',
    },
]
const Blog = () => {
    return (
        <section className="blogs">
            <div className="container">
                <header className="blogs-header">
                    <h1 className="main-title">The latest from the blog</h1>
                    <button className="outline-button">VITST BLOG</button>
                </header>

                <section className="blogs-cards">
                {blogsPosts.map((item, index) => {
                    return <section key={index} className="blog-card">
                    <div className="content">
                        <h1 className="blog-title">{item.title}</h1>
                        <p className="main-title-paragraph">{item.content}</p>
                        <div className="link-container">
                            <span className="link-styles">READ MORE</span> 
                            <FaArrowRight />
                        </div>
                    </div>
                    </section>
                })}
                    <div className="rhombus-shap shap-end"></div>
                </section>
            </div>
        </section>
    )
}

export default Blog