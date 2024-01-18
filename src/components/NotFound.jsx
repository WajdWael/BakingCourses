import video from '../../public/bubble-gum-error-404.gif'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='container flex-center' style={{flexDirection:'column', paddingBottom:'4rem'}}>
            <img src={video} alt="animated bubble gum error 404!" />
            <h1>Page Not Found!</h1>
            <Link className='blue-link' to='/'>Back to Home</Link>
        </section>
    )
}

export default NotFound