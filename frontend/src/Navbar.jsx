export default function Navbar() {
    return ( <nav className="nav">
        <a href="/" className="brand-name">Wanderly</a>
        <h3>rediscover travel</h3>
        <ul>
            <CustomLink href="/search">Search</CustomLink>
            <CustomLink href="/map">Map</CustomLink>
            <CustomLink href="/quiz">Quiz</CustomLink>
            <CustomLink href="/login">Login</CustomLink>
            <CustomLink href="/create">Submit Review</CustomLink>
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