import { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Loader from "./Loader";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true); 
    const regions = [
        {
            name: "Asia",
        },
        {
            name: "Europe",
        },
        {
            name: "Africa",
        },
        {
            name: "Oceania",
        },
        {
            name: "Americas",
        },
        {
            name: "Antarctic",
        },
    ];

    useEffect(() => {
        document.title = `Showing All Countries`;
    }, []);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const res = await axios.get("https://restcountries.com/v3.1/all");
                const data = res.data;
                setCountries(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getCountries();
    }, []);

    async function searchCountry() {
        setIsLoading(true); 
        try {
            const res = await axios.get(
                `https://restcountries.com/v3.1/name/${searchText}`
            );
            const data = res.data;
            setCountries(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    async function filterByRegion(region) {
        setIsLoading(true);
        try {
            const res = await axios.get(
                `https://restcountries.com/v3.1/region/${region}`
            );
            const data = res.data;
            setCountries(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSearchCountry(e) {
        e.preventDefault();
        searchCountry();
    }

    function handleFilterByRegion(e) {
        e.preventDefault();
        filterByRegion();
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section className="container mx-auto p-8 text-gray-800">
                    {/* form */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                        <form
                            onSubmit={handleSearchCountry}
                            autoComplete="off"
                            className="max-w-4xl md:flex-1"
                        >
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Search for a country..."
                                    required
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className="w-full py-3 pl-12 pr-4 text-gray-600 bg-white placeholder-gray-600 border rounded-md outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"
                                />
                            </div>
                        </form>

                        <form onSubmit={handleFilterByRegion}>
                            <select
                                name="filter-by-region"
                                id="filter-by-region"
                                className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 bg-white dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700"
                                value={regions.name}
                                onChange={(e) => filterByRegion(e.target.value)}
                            >
                                {regions.map((region, index) => (
                                    <option key={index} value={region.name} className="rouder-lg">
                                        {region.name}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {countries.map((country) => (
                            <Article key={country.name.common} {...country} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}