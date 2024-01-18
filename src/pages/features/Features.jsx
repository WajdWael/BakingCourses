import './Features.css'

const FeatuersCotntent = [
    {
        image: 'service.png',
        title: 'Easy steps to follow',
        content: 'Mattis tortor dolor vitae congue purus imperdiet aliquam ultrices nunc.',
    },
    {
        image: 'money-back-guarantee.png',
        title: 'Delicious recipes guarantee',
        content: 'Mauris in nibh purus magnis eget dui adipiscing eget ligula vitae.',
    },
    {
        image: 'clear.png',
        title: 'Clear audio & video',
        content: 'Eu quis etiam auctor aenean nisl ut odio ultricies massa orci mauris.',
    },
]

const Features = () => {
    return (
        <section className="container">
            <div className="features">
                {FeatuersCotntent.map((item, index) => {
                return <div key={index} className="featuer-card">
                    <img className='feature-image' src={item.image} alt={item.title} />
                    <h1 className="featuer-title main-title">{item.title}</h1>
                    <p className="featuer-paragraph main-title-paragraph">{item.content}</p>
                </div>
                })}
            </div>
        </section>
    )
}

export default Features