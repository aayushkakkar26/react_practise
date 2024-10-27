import { useState } from "react"

const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
export default function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [itemsArr, setItemsArr] = useState(items)

    function handleChange(e) {
        setSearchInput(e.target.value)

    }
    function handleSearch() {
        if (searchInput.trim()) {

            const searchItem = itemsArr.find((items) => items === searchInput)
            setItemsArr([searchItem])

        }
    }
    return <>
        <input type="text" onChange={handleChange} value={searchInput} />
        <button onClick={handleSearch}>Search</button>
        <ul>
            {(itemsArr.length === 0 || itemsArr[0] === undefined) ? <p>No Items Found.</p> : itemsArr.map((i, index) => <li key={index}>{i}</li>)}
        </ul>

    </>
}