export default function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </footer>
        );
    }

    const packedItemsLength = items.filter((i) => i.packed).length;

    return (
        <footer className="stats">
            <em>
                {items.length === packedItemsLength
                    ? "You got everything! Ready to go ✈️"
                    : `💼 You have ${
                          items.length
                      } items on your list, and you already packed ${packedItemsLength} (${
                          Math.round(
                              (packedItemsLength / items.length) * 100
                          ) || 0
                      }%)`}
            </em>
        </footer>
    );
}
