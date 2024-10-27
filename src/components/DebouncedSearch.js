const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
import { useState, useEffect } from "react";

export default function DebouncedSearch() {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    // Debounce logic
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    // Filter the items based on debounced input value
    useEffect(() => {
        if (debouncedValue) {
            setFilteredItems(items.filter((item) => item.toLowerCase().includes(debouncedValue.toLowerCase())));
        } else {
            setFilteredItems(items);
        }
    }, [debouncedValue]);

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <ul>
                {filteredItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
