import React from "react"
import { Link } from "react-router-dom"

export default function Layout({ children, className }) {
    return (
        <div className={` ${className}`}>
            <nav className="bg-amber-50 flex flex-row h-20 w-full space-x-5 items-center justify-center">
                {/* <a href="/" className="bg-green-100 px-2 py-0.5 rounded-md hover:shadow-lg hover:bg-green-200">Home Page</a> */}
                <Link to="/" className="bg-cyan-200 px-2 py-0.5 rounded-md hover:shadow-lg hover:bg-cyan-300">Home Page</Link>
                {/* <a href="/about" className="bg-green-100 px-2 py-0.5 rounded-md hover:shadow-lg hover:bg-green-200">About Page</a> */}
                <Link to="/about" className="bg-cyan-200 px-2 py-0.5 rounded-md hover:shadow-lg hover:bg-cyan-300">About Page</Link>
            </nav>
            {children}
        </div>
    )
}