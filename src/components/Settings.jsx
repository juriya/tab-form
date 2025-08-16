export default function Settings({ data, setData }) {
  const { theme } = data;

  function handleDataChange(event) {
    setData((prevData) => ({ ...prevData, theme: event.target.name }));
  }

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleDataChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleDataChange}
          />
          Light
        </label>
      </div>
    </div>
  );
}
