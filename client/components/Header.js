import Link from 'next/link'

export default ({ user }) => {
    const links = [
        !user && { lable: 'Sign In', href: "/auth/signin" },
        !user && { lable: 'Sign Up', href: "/auth/signup" },
        user && { lable: 'Sign Out', href: "/auth/signout" },
    ].filter((linkConfig) => linkConfig)
        .map(({ lable, href }, i) => {
            return <li key={href} className="nav-item">
                <Link href={href}>
                    {lable}
                </Link>
            </li>
        })

    return <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" href="/">
            IRCTC
        </Link>

        <div className="d-flex justify-content-end">
            <ul className="nav d-flex align-items-center">
                {links}
            </ul>
        </div>
    </nav>
}