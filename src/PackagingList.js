import { useState } from "react";

export default function PackagingList({
    items,
    onRemoveItem,
    onPackItem,
    onClearList,
}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        onRemoveItem={onRemoveItem}
                        onPackItem={onPackItem}
                        key={item.id}
                    />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    {/* <option value="input">Sort by input order</option> */}
                    <option value="input">-- Default --</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>

                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}

function Item({ item, onRemoveItem, onPackItem }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                id={item.id}
                onChange={(e) => onPackItem(item)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={(e) => onRemoveItem(item)}>❌</button>
        </li>
    );
}
