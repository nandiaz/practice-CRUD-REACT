import React from "react";
import { nanoid } from "nanoid";
//setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }]);
function App() {
  const [homework, setHomework] = React.useState("");
  const [homeworks, setHomeworks] = React.useState([]);
  const [modoEdition, setModoEdition] = React.useState(false);

  const addHomework = (e) => {
    e.preventDefault();
    if (!homework.trim()) {
      console.log("Empty element");
      return;
    }
    console.log(homework);

    setHomeworks([
      ...homeworks,
      {
        id: nanoid(),
        nameHomework: homework,
      },
    ]);
    setHomework("");
  };

  const deleteHomework = (id) => {
    //console.log(id);
    const arrayFilter = homeworks.filter((item) => item.id !== id);
    setHomeworks(arrayFilter);
  };

  const editHomework = (item) => {
    console.log(item);
    setModoEdition(true);
    setHomework(item.nameHomework);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Homework List</h4>
          <ul className="list-group">
            {homeworks.map((item) => (
              <li className="list-group-item" key={item.id}>
                <span className="lead">{item.nameHomework}</span>
                <button
                  className="btn btn-danger btn-sm float-end mx-2"
                  onClick={() => deleteHomework(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm float-end"
                  onClick={() => editHomework(item)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {modoEdition ? "Edit Homework" : "Add Homework"}
          </h4>
          <form onSubmit={addHomework}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter homework"
              onChange={(e) => setHomework(e.target.value)}
              value={homework}
            />
            <div className="d-grid">
              {modoEdition ? (
                <button className="btn btn-warning " type="submit">
                  Edit
                </button>
              ) : (
                <button className="btn btn-dark" type="submit">
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
