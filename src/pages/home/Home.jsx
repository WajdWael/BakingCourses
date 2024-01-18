import './Home.css'
import heroImage from '/public/hero-section.jpg'

const Home = () => {
    return <header className="hero-section container">
        <div className="backgournd"></div>
        <section className="col1">
            <div className="line"></div>
            <div className="content">
                <h1 className="large-size main-title">Learn baking cookies, pastries, cakes & more.</h1>
                <p className="main-title-paragraph">Sed gravida ornare vestibulum turpis quam urna aliquam in feugiat lorem dolor pulvinar a, scelerisque amet ultrices consectetur magna sit.</p>
            </div>
            <div className="buttons-section">
                <div className="button-hero-container">
                    <button className="button">ENROLL TODAY</button>
                </div>
                <div className="link-container">
                    <a className="link-styles" href="">VIEW COURSES</a> 
                    <i className='bx bx-right-arrow-alt standered-icon'></i>
                </div>
            </div>
            <div className="hero-social">
                <i className='bx bxl-instagram standered-icon'></i>
                <i className='bx bxl-youtube standered-icon'></i>
                <i className='bx bxl-facebook-circle standered-icon'></i>
            </div>
        </section>

        <section className="col2">
            <img className="standered-img" src={heroImage} alt="cake" />
        </section>
    </header>
}

export default Home