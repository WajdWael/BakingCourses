import { useRouteError } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

export default function ErrorPage() {
    const error = useRouteError();
    return <>
        <section id="error-page" style={{ height: '100vh', flexDirection:'column', gap:'2rem'}} className="flex-center">
            <BiSolidError size={100} style={{color:'#ea1616'}} />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
            <i>{error.statusText || error.message}</i>
            </p>
        </section>
    </>
}