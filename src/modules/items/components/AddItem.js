
import axios from "axios";

export default function AddItem() {

 const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log(data)

    axios
      .post("http://localhost:5003/api/items/add", data)
      .then((response) => {
        console.log(response.data);
        // Add any success handling code here
      })
      .catch((error) => {
        console.error(error);
        // Add any error handling code here
      });

    form.reset();
  };
  

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dose" className="form-label">
              Dose
            </label>
            <input
              type="text"
              className="form-control"
              id="dose"
              name="dose"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sellerName" className="form-label">
              Seller Name
            </label>
            <input
              type="text"
              className="form-control"
              id="sellerName"
              name="sellerName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="desc"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select className="form-control" id="status" name="status" required>
              <option value="">Select Status</option>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Add Image Link
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
