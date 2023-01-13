export default function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Place</h2>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="imageURL">
        Image URL:
        <input type="text" id="imageURL" name="image" />
      </label>
      <label htmlFor="location">
        Location:
        <input type="text" id="location" name="location" />
      </label>
      <label htmlFor="mapURL">
        Map Url:
        <input type="text" id="mapURL" name="mapURL" />
      </label>
      <label htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
