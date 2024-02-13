import { useState } from "react";
import "./index.css";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
    return (
        <div className="App">
            <Logo />
            <Form />
            <PackagingList />
            <Stats />
        </div>
    );
}

// logo
function Logo() {
    return <h1>🏝️ Far Away 🧳</h1>;
}

// form
function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        initialItems.push({
            id: Date.now(),
            description,
            quantity,
            packed: false,
        });
        console.log(initialItems);
        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for you 😍 trip?</h3>

            <select
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Item..."
            />
            <button type="submit">Add</button>
        </form>
    );
}

// List
function PackagingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

// Stats
function Stats() {
    return (
        <footer className="stats">
            <em>
                💼 You have X items on your list, and you already packed X (%)
            </em>
        </footer>
    );
}
