function StudentForm() {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow p-4 w-100" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4 text-center">Add New Task</h2>

        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter task details"
          ></textarea>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Due Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Priority</label>
            <select className="form-select">
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
