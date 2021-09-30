import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="text-black bg-white h-16 body-font flex justify-between items-center relative shadow-sm font-sans mb-4" role="navigation">
                <Link to='/' className="pl-4 md:pl-8">Netflix</Link>
                <div className="px-4 cursor-pointer md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className="md:block hidden pr-8">
                    <Link to='#' className="p-4">First Link</Link>
                    <Link to='#' className="p-4">Second Link</Link>
                    <Link to='#' className="p-4">Third Link</Link>
                    <Link to='#' className="p-4">Fourth Link</Link>
                </div>
        </nav>
    )
}

export default Navbar