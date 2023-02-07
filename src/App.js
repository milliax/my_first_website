// import './App.css';
// import { useEffect, useState } from "react"

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

// import HomeIndex from './home/index';
import HomeIndex from './home';
import AboutPage from './about';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeIndex />
    }, {
        path: "/about",
        element: <AboutPage />
    }
])

export default function App() {
    return (
        <div className='App'>
            <RouterProvider router={router}/>
        </div>
    )
}

// function App() {
//     // const [name, setName] = useState("");
//     const [data, setData] = useState([]);

//     function fetchData() {
//         fetch(`https://data.tycg.gov.tw//api/v1/rest/datasetInfo`)
//             .then(e => { return e.json() })
//             .then(response => {
//                 console.log(response)
//                 setData(response)
//             })
//     }

//     useEffect(() => {
//         // console.log("Nice to see you")
//         // name = "John"
//         // setName("John")
//         fetchData()
//     }, [])

//     return (
//         <div className="App">
//             {/* Hello, {name} */}
//             {data.map((e, cnt) => {
//                 return (
//                     <div key={`${e.resourceid}${e.datasetid}`}>{e.dataset}</div>
//                 )
//             })}
//         </div>
//     );
// }

// export default App;
