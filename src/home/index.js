import Layout from "../Layout"
import { useState, useEffect } from "react"

import {
    MagnifyingGlassIcon,
    XMarkIcon
} from "@heroicons/react/24/outline"

import {
    motion,
    AnimatePresence
} from "framer-motion"

export default function HomeIndex() {
    const [pets, setPets] = useState([])
    const [selectedPets, setSelectedPets] = useState([])

    const [searchParam, setSearchParam] = useState("")
    const [selectedID, setSelectedID] = useState(null)

    async function getPets() {
        const res = await fetch("https://milliax.github.io/raw/web_dev/pets.json")
        const response = await res.json();

        console.log(response)
        setPets(response)
        setSelectedPets(response)
    }

    function updateSelectedPets() {
        // console.log("update Pets!!")

        const param = searchParam
        setSelectedPets(pets.filter((pet) => {
            console.log(pet.name)
            if (pet.name.includes(param) || pet.breed.includes(param)) {
                return true
            } else {
                return false
            }
        }))
    }

    useEffect(() => {
        getPets()
        // eslint-disable-next-line
    }, [])

    return (
        <Layout className="bg-gray-100">
            <div className="flex flex-row justify-center mt-5">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    updateSelectedPets();
                }} className="flex flex-row bg-white w-fit py-1 items-center rounded-full pl-2 pr-1">
                    <input type="text" className="outline-none px-1 w-80"
                        value={searchParam}
                        onChange={(e) => { setSearchParam(e.target.value) }} />
                    <MagnifyingGlassIcon className="h-5 px-2 cursor-pointer"
                        onClick={() => { updateSelectedPets() }} />
                </form>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 place-items-center">
                {selectedPets.map((pet, cnt) => {
                    if (`${cnt}` === selectedID) {
                        return <div />
                    } else {
                        return <motion.div key={pet.name} layoutId={pet.name} className={`w-44 h-32 bg-indigo-100 flex pt-3 pb-1 flex-col justify-between rounded-md shadow-md cursor-pointer select-none`} onClick={() => { setSelectedID(`${cnt}`) }}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <div className="flex justify-center">
                                <img src={pet.imageURL} alt={`${pet.name}的照片`} className="w-20 h-20 object-cover rounded-lg" />
                            </div>
                            <div className="w-full text-center">
                                {pet.name} {pet.breed}
                            </div>
                        </motion.div>
                    }
                })}

                <AnimatePresence initial={false}>
                    {selectedID && <motion.div layout={selectedID} className="fixed w-80 h-80 top-0 mt-[calc(50vh-10rem)] left-0 ml-[calc(50%-10rem)] bg-white rounded-lg border border-gray-600"
                        key="model" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="flex flex-col px-5 py-3">
                            <XMarkIcon onClick={() => { setSelectedID(null) }} className="h-6 self-end text-red-500 hover:text-red-800 cursor-pointer" />
                            <div>
                                <div className="flex justify-center">
                                    <img src={selectedPets[selectedID].imageURL} alt={`${selectedPets[selectedID].name}的照片`} className="w-20 h-20 object-cover rounded-lg" />
                                </div>
                                <div className="w-full text-center">
                                    {selectedPets[selectedID].name} {selectedPets[selectedID].breed}
                                </div>
                                <div className="h-40 overflow-y-auto">
                                    {selectedPets[selectedID].description}
                                </div>
                            </div>
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </Layout>
    )
}

// function A() {
//     return setTimeout(("") => {
//         console.log("A")
//     }, 2000)
// }

// function B() {
//     return setTimeout(() => {
//         console.log("B")
//     }, 1000)
// }