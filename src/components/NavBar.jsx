import { Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react";

import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'

const NavBar = () => {
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
    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-10 border-b">
                <div className="text-black dark:text-white dark:bg-gray-900 flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                    <div className="flex-1 flex items-center justify-between">
                        <div className="p-4 border-b lg:static lg:block lg:border-none">
                            <Link to="/">
                                <b>Where in the World?</b>
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                            <button
                                className="outline-none flex items-center space-x-1 w-10 sm:w-36"
                                type="button"
                                onClick={handleThemeSwitch}
                            >
                                {theme === 'dark' ? (
                                    <>
                                        <img src={moon} alt="Moon" className="h-8" />
                                        <span className="hidden sm:inline">Dark mode</span>
                                    </>
                                ) : (
                                    <>
                                        <img src={sun} alt="Sun" className="h-8" />
                                        <span className="hidden sm:inline">Light mode</span>
                                    </>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
            <div className="pt-16">
                <Outlet />
            </div>
        </div>

    )
}

export default NavBar