export default function Navbar() {
    return ( <nav className="nav">
        <ul>
            <input type="text" id="search" placeholder="Get inspired..."></input>
            <CustomLink href="/search">Search</CustomLink>
            <CustomLink href="/map">Map</CustomLink>
            <CustomLink href="/quiz">Quiz</CustomLink>
            <CustomLink href="/login">Login</CustomLink>
            <CustomLink href="/experience">Create Experience</CustomLink>
            <CustomLink href="/review">Submit Review</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink( {href, children, ...props} ) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active": ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}