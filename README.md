# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.jpg)
![image](https://github.com/anotherinthefire/rest-countries-api-with-color-theme-switcher/assets/107034155/4a2cb151-7991-4195-84ea-b6920f38dfe6)

![image](https://github.com/anotherinthefire/rest-countries-api-with-color-theme-switcher/assets/107034155/5760ec8d-60bd-4363-8f02-0e74f626b373)



### Links

- Solution URL: [soon](https://your-solution-url.com)
- Live Site URL: [Country App](https://rest-countries-api-with-color-theme-switcher-bay-one.vercel.app/)

## My process

### Built with
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [react-router-v6](https://reactrouter.com/en/main)_
- [axios](https://axios-http.com/)


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```

    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true); 

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
```

dark mode
```
const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia('(prefer-color-scheme:dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
```

### Continued development

Add other dropdown design and display it in nav/header



## Author

- Website - [Ron Ultra]([https://www.your-site.com](https://suntzaur-portfolio.vercel.app/))
- Frontend Mentor - [@suntzaur]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/anotherinthefire))
  

install react js using vite
install tailwind
install react router dom

if you want different dropdown
```
design dropdown but can not see the existing region filtered
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


<form onSubmit={handleFilterByRegion}>
  <div className={`hs-dropdown absolute inline-col ${isOpen ? 'hs-dropdown-open' : ''} w-52 py-3 px-4 outline-none shadow rounded text-gray-600 bg-white dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700`}>
    <button
      id="hs-dropdown-hover-event"
      type="button"
      className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={toggleDropdown}
    >
      {regions.name}Filter by region
      <svg
        className={`hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 ${isOpen ? 'hs-dropdown-open' : ''}`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
    <div
      className={`hs-dropdown-menu transition-[opacity,margin] duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} min-w-[15rem] bg-white shadow-md rounded-lg mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700`}
      aria-labelledby="hs-dropdown-hover-event"
    >
      {regions.map((region, index) => (
        <p
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          key={index}
          value={region.name}
          onClick={() => filterByRegion(region.name)}
        >
          {region.name}
        </p>
      ))}
    </div>
  </div>
</form>
```
