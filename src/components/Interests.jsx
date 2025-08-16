export default function Interests({ data, setData, errors }) {
  const { interests } = data;

  function handleDataChange(event) {
    setData((prevData) => ({
      ...prevData,
      interests: event.target.checked
        ? [...prevData.interests, event.target.name]
        : prevData.interests.filter((i) => i !== event.target.name),
    }));
  }

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            onChange={handleDataChange}
            checked={interests.includes("coding")}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            onChange={handleDataChange}
            checked={interests.includes("music")}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            onChange={handleDataChange}
            checked={interests.includes("javascript")}
          />
          JavaScript
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
}
