import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
    const [countryDetails] = useLoaderData([])
    console.log(countryDetails.name.common);
    return (
        <div>
            <h2 className="text-5xl">Flag of {countryDetails.name.common}</h2>
            <img className=" h-80 w-6/12 p-8" src={countryDetails.flags.png} alt="" />
            {/* <h2>Independent {countryDetails.area}</h2> */}
            <h3 className="text-3xl">Country Information</h3>
            <table>
                <tbody>
                    <tr>
                        <th className="p-2 pr-16"  scope="row">Independent</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th className="p-2 pr-16"  scope="row">Country codes</th>
                        <td>{countryDetails.cca3}</td>
                    </tr>
                    <tr>
                        <th className="p-2 pr-16"  scope="row">Capital city</th>
                        <td>{countryDetails.capital[0]}</td>
                    </tr>
                    <tr>
                        <th className="p-2 pr-16"  scope="row">Continent</th>
                        <td>{countryDetails.continents[0]}</td>
                    </tr>
                    <tr>
                        <th className="p-2 pr-16"  scope="row">Population</th>
                        <td>{countryDetails.population}</td>
                    </tr>
                    <tr>
                        <th className="p-2 pr-16"  scope="row">Total area</th>
                        <td>{countryDetails.area}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CountryDetails;