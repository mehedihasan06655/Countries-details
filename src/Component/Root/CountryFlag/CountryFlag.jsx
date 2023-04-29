import { useLoaderData } from "react-router-dom";
import Country from "../../Country/Country";

const CountryFlag = () => {
    const countries = useLoaderData();
    // console.log(countries);
    return (
        <div className="grid grid-cols-3 gap-20 mt-20">
            {
                countries.map(country =>
                    <Country
                        key={country.ccn3}
                        country={country}
                    />
                )
            }
        </div>
    );
};

export default CountryFlag;