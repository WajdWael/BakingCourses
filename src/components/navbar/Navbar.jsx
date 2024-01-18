import { NavLink } from "react-router-dom"
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { BiHome,BiSolidInfoCircle,BiSolidComponent,BiDumbbell,BiSolidChat,BiSolidSticker,BiSolidPhone } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(true);

    const handleActiveClass = () => {
        setActive(!active);
    }

    return <nav className="container">
        <header className="navbar--header">
            <section className="logo-section">
                <a href="#" className="logo">BackingNicole</a>
            </section>

            <section className="nav-buttons">
                <CiSearch className='bx bx-search-alt-2 standered-icon' />
                <FaBars onClick={handleActiveClass} className='bx bx-search-alt-2 standered-icon' />

                <NavLink to='join' className="outline-button none">join today</NavLink>
            </section>
        </header>

        <article className={`navbar--links ${active? 'list-on' : 'list-off'}`}>
            <li className="nav-item">
                <NavLink
                    className="flex-center"
                    to="/"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Home"
                    data-tooltip-place="top"
                ><BiHome /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="flex-center"
                    to="about"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="About"
                    data-tooltip-place="top"
                ><BiSolidInfoCircle /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="flex-center"
                    to="courses"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Courses"
                    data-tooltip-place="top"
                ><BiSolidComponent /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="flex-center"
                    to="features"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Features"
                    data-tooltip-place="top"
                ><BiDumbbell /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="flex-center"
                    to="feedback"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Feedbacks"
                    data-tooltip-place="top"
                ><BiSolidChat /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="flex-center"
                    to="blogs"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Blog"
                    data-tooltip-place="top"
                ><BiSolidSticker /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="flex-center"
                    to="join"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Contact"
                    data-tooltip-place="top"
                ><BiSolidPhone /></NavLink>
            </li>
        </article>
        <Tooltip id="my-tooltip" />
    </nav>
}

export default Navbar