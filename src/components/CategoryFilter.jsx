export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="buttons">
      {categories.map(c => (
        <button
          key={c}
          className={c === selected ? "active" : ""}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
