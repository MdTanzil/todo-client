/* eslint-disable react/prop-types */

import axios from "axios";
import Swal from "sweetalert2";


const Card = ({task,forceUpdate,update}) => {
    const handleEditClick = (task) => {
        // console.log(task);
        Swal.fire({
          title: "Edit Task",
          html: `
      <label for="title" class="swal2-label">Title</label>
      <input id="title" class="swal2-input" value="${
        task.title
      }" placeholder="Title" />
    
      <label for="description" class="swal2-label">Description</label>
      <input id="description" class="swal2-input" value="${
        task.description
      }" placeholder="Description" />
    
      <label for="deadline" class="swal2-label">Deadline</label>
      <input id="deadline" class="swal2-input" value="${
        task.deadline
      }" placeholder="Deadline" />
    
      <label for="priority" class="swal2-label">Priority</label>
      <input id="priority" class="swal2-input" value="${
        task.priority
      }" placeholder="Priority" />
    
      <label for="status" class="swal2-label">Status</label>
      <select id="status" class="swal2-select" placeholder="Status">
        <option value="To-Do" ${
          task.status === "To-Do" ? "selected" : ""
        }>To-Do</option>
        <option value="Ongoing" ${
          task.status === "Ongoing" ? "selected" : ""
        }>Ongoing</option>
        <option value="Completed" ${
          task.status === "Completed" ? "selected" : ""
        }>Completed</option>
      </select>
    `,
    
          focusConfirm: false,
          preConfirm: () => {
            // Retrieve values from the input fields
            const title = Swal.getPopup().querySelector("#title").value;
            const description = Swal.getPopup().querySelector("#description").value;
            const deadline = Swal.getPopup().querySelector("#deadline").value;
            const priority = Swal.getPopup().querySelector("#priority").value;
            const status = Swal.getPopup().querySelector("#status").value;
            const data = {
              title,
              description,
              deadline,
              priority,
              status,
              id: task._id,
            };
            axios.put("https://todo-server-wheat.vercel.app/todos", data).then((data) => {
              if (data.data.modifiedCount) {
                forceUpdate(update + 1);
    
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Update Success",
                  showConfirmButton: false,
                  timer: 1500,
                });
                forceUpdate(update + 1);
              }
            });
    
            // Perform your update logic with the retrieved values
            // Example: call a function to update the task
            // updateTask(task.id, { title, description, deadline, priority });
            // console.log('updated task' , title, description, deadline, priority);
          },
        });
      };
      const handleDelete = (task) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // console.log(task._id);
            axios
              .delete(`https://todo-server-wheat.vercel.app/todos/${task._id}`)
              .then((response) => {
                if (response.data.deletedCount > 0) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Delete Success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
    
                  forceUpdate(update + 1);
                }
              });
          }
        });
      };
      
    return (
        <div className="card  shadow-lg my-4" key={task.title}>
        <div className="card-body ">
          <div className="flex items-center">
            <h2 className="card-title">{task.title}</h2>
            <div className="badge">{task.priority}</div>
          </div>
          <p>{task.description}</p>
          <p>Deadline: {task.deadline}</p>
          <p>Status: {task.status}</p>


          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary"
              onClick={() => handleEditClick(task)}
            >
              Edit Task
            </button>
            <button
              className="btn bg-red-500 text-white"
              onClick={() => handleDelete(task)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
};

export default Card;