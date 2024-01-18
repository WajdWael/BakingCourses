import './Courses.css'
const Courses = () => {
    const cardData = [
        {
            image: 'learn-baking-course-cover-img-1.jpg',
            title: 'Cookie Decorations',
            content: 'Eu adipiscing nec erat amet at aliquam blandit gravida massa suscipit massa.',
            bestSeller: true
        },
        {
            image: 'learn-baking-course-cover-img-2.jpg',
            title: 'Easy & Versatile Baking',
            content: 'Eu adipiscing nec erat amet at aliquam blandit gravida massa suscipit.',
            bestSeller: true
        },
        {
            image: 'learn-baking-course-cover-img-3.jpg',
            title: 'How to Make Butter Cakes',
            content: 'Eu adipiscing nec erat amet at aliquam blandit gravida massa.',
            bestSeller: false
        }
    ]

    const isBestSeller = (item) => {
        return item.bestSeller ? "Best Seller" : '';
    };

    return <section className="main-container" style={{margin:'5rem 0'}}>
        <div className="rhombus-shap shap-start"></div>
        <section className="courses-section">
            <section className="container">
                <section className="content">
                    <div className="col1">
                        <h1 className="main-title">Popular courses</h1>
                    </div>
        
                    <div className="col2">
                        <p className="main-title-paragraph">Mi mattis tortor dolor vitae congue purus mi imperdiet aliquam ultrices nunc.</p>
                        <button className="outline-button">VIEW ALL COURSES</button>
                    </div>
                </section>
                <section className="cards">
                    {cardData.map((item, index) => {
                    return <div key={index} className="single-card">
                        {isBestSeller(item) ?
                        <div className="bestseller-section">
                            <div className="bestseller">
                                <p>Best Seller</p>
                            </div>
                        </div>
                        :null
                        }
                        <img className="card-image" src={item.image} alt={item.title} />
                        <div className="card-content">
                            <h1 className="card-title">{item.title}</h1>
                            <p>{item.content}</p>
                            <button className="card-button">Enroll Now</button>
                        </div>
                    </div>
                    })}
                </section>
            </section>
        </section>
        <div className="rhombus-shap shap-end"></div>
    </section>
}

export default Courses