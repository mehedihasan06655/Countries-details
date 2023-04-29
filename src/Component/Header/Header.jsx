import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="mt-8 mb-12">
            <Link className="p-8 bg-white border-r-4" to='/'>Country Flags</Link>
            <Link className="p-8 bg-white border-r-4" to= '/quiz'>Flags quiz</Link>
            <Link className="p-8 bg-white border-r-4" to= '/continents'>Continents</Link>
            <Link className="p-8 bg-white border-r-4" to= '/organization'>Organization</Link>
            <Link className="p-8 bg-white border-r-4" to= '/state'>U.S. State</Link>
            <Link className="p-8 bg-white border-r-4" to= '/emojiFlags'>Emoji Flags</Link>
            <Link className="p-8 bg-white border-r-4" to='/download'>Download</Link>
            <Link className="p-8 bg-white" to='/about'>About</Link>
        </nav>
    );
};

export default Header;