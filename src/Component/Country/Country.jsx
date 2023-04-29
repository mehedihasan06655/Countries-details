import { Link } from "react-router-dom";

const Country = (country) => {
    console.log(country)
    // console.log(country.country.name.common)
    return (
        <div>
            <Link to={`country/${country.country.name.common}`}>
            <img className="h-32 w-56" src={country.country.flags.png} alt="" />
            <h2>{country.country.name.common}</h2>
             </Link>
            
        </div>
    );
};

export default Country;