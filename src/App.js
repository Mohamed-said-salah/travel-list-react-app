import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

export default function App() {
    const [items, setItems] = useState([]);

    function addItem(item) {
        setItems((items) => [...items, item]);
    }

    function removeItem(item) {
        setItems((items) => items.filter((i) => item.id !== i.id));
    }

    function packItem(item) {
        setItems((items) =>
            items.map((i) =>
                i.id === item.id ? { ...item, packed: !item.packed } : i
            )
        );
    }

    function clearList() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    }

    return (
        <div className="App">
            <Logo />
            <Form onAddItems={addItem} />
            <PackagingList
                items={items}
                onRemoveItem={removeItem}
                onPackItem={packItem}
                onClearList={clearList}
            />
            <Stats items={items} />
        </div>
    );
}
