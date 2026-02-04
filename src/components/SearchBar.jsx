export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        className="w-full border-2 border-black rounded-xl px-4 py-3 text-lg focus:outline-none"
        type="text"
        placeholder="Search Projects"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
