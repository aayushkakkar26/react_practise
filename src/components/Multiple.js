import { useState } from "react"

export default function Multiple() {
    const [mul, setMul] = useState({
        count: 0,
        isValid: false,
        text: ''
    })

    function handleChange(e) {
        setMul({ ...mul, text: e.target.value })
    }
    function handleToggle() {
        setMul({ ...mul, isValid: !mul.isValid })
    }
    function Increment() {
        setMul({ ...mul, count: mul.count + 1 })

    }
    return <>
        <h3>Welcome {mul.text ? mul.text : 'random'}</h3>
        <input type="text" onChange={handleChange} value={mul.text} />
        <button onClick={handleToggle}>{mul.isValid ? 'ON' : 'OFF'}</button>
        <button onClick={Increment}>{mul.count}</button>

    </>
}