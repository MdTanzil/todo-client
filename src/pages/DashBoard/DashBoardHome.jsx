import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useOutletContext } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Card from "../../components/Card";

const DashBoardHome = () => {
  const [data, setData] = useState();
  const [selectedStatus, setSelectedStatus] = useState("To-Do");
  const [selectedIndex, setSelectedIndex] = useOutletContext();
  const [update, forceUpdate] = useState(0); // Dummy state for forceUpdate
  const {user} = useAuth()
  

  //   console.log(selectedIndex);
  useEffect(() => {
    axios.get(`https://todo-server-wheat.vercel.app/todos/${user?.email}`).then((data) => {
      setData(data.data);
      
    });
  }, [update, user?.email]);

  const filteredTasks = data?.filter((task) => task.status === selectedStatus);
  //   console.log(filteredTasks);

  return (
    <div className="min-w-full mx-auto ">
      <Tabs selectedIndex={selectedIndex} onSelect={() => {}}>
        <TabList style={{ width: "800px" }}>
          <Tab
            onClick={() => {
              setSelectedStatus("To-Do");
              setSelectedIndex(0);
            }}
          >
            To-Do
          </Tab>
          <Tab
            onClick={() => {
              setSelectedStatus("Ongoing");
              setSelectedIndex(1);
            }}
          >
            Ongoing
          </Tab>
          <Tab
            onClick={() => {
              setSelectedStatus("Completed");
              setSelectedIndex(2);
            }}
          >
            Completed
          </Tab>
          <Tab>
            <button
              className="btn btn-success"
              onClick={() => {
                Swal.fire({
                  title: "Add New Task",
                  html: `
     
                  <label for="title" class="swal2-label">Title</label>
                  <input id="title" class="swal2-input" placeholder="Title" />
              
                  <label for="description" class="swal2-label">Description</label>
                  <input id="description" class="swal2-input" placeholder="Description" />
              
                  <label for="deadline" class="swal2-label">Deadline</label>
                  <input id="deadline" class="swal2-input" placeholder="2023-02-12" />
              
                  <label for="priority" class="swal2-label">Priority</label>
                  <input id="priority" class="swal2-input" placeholder="Priority" />
              
                  <label for="status" class="swal2-label">Status</label>
                  <select id="status" class="swal2-select" placeholder="Status">
                    <option value="To-Do">To-Do</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </select>
                  `,
                  focusConfirm: false,
                  preConfirm: () => {
                    const title = Swal.getPopup().querySelector("#title").value;
                    const description =
                      Swal.getPopup().querySelector("#description").value;
                    const deadline =
                      Swal.getPopup().querySelector("#deadline").value;
                    const priority =
                      Swal.getPopup().querySelector("#priority").value;
                    const status =
                      Swal.getPopup().querySelector("#status").value;
                    const data = {
                      title,
                      description,
                      deadline,
                      priority,
                      status,
                      name : user?. displayName,
                      email : user?. email

                    };
                    console.log(data);
                    axios.post('https://todo-server-wheat.vercel.app/todos',data)
                    .then(response => {
                        console.log(response);
                        if (response.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Todo add Success",
                                showConfirmButton: false,
                                timer: 1500,
                              });
                
                              forceUpdate(update + 1);
                        }
                    })
                  },
                });
              }}
            >
              Add new
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            {
            
            
            filteredTasks?.map((task) => (
              <Card task={task} key={task._id} forceUpdate={forceUpdate} update={update} ></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {filteredTasks?.map((task) => (
              <Card task={task} key={task._id} forceUpdate={forceUpdate} update={update} ></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {filteredTasks?.map((task) => (
              <Card task={task} key={task._id} forceUpdate={forceUpdate} update={update} ></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashBoardHome;
