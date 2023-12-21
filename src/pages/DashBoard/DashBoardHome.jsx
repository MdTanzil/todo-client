import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useOutletContext } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const DashBoardHome = () => {
  const [data, setData] = useState();
  const [selectedStatus, setSelectedStatus] = useState("To-Do");
  const [selectedIndex, setSelectedIndex] = useOutletContext();
  //   console.log(selectedIndex);
  useEffect(() => {
    fetch("../../../public/todoData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const filteredTasks = data?.filter((task) => task.status === selectedStatus);
  //   console.log(filteredTasks);

  return (
    <div className="min-w-full mx-auto ">
      <Tabs selectedIndex={selectedIndex}>
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
        </TabList>

        <TabPanel>
          <div>
            {filteredTasks?.map((task) => (
              <div className="card  shadow-lg my-4" key={task.title}>
                <div className="card-body ">
                  <div className="flex items-center">
                    <h2 className="card-title">{task.title}</h2>
                    <div className="badge">{task.priority}</div>
                  </div>
                  <p>{task.description}</p>
                  <p>Deadline: {task.deadline}</p>

                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Edit Task</button>
                    <button className="btn bg-red-500 text-white">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {filteredTasks?.map((task) => (
              <div className="card  shadow-lg my-4" key={task.title}>
                <div className="card-body ">
                  <div className="flex items-center">
                    <h2 className="card-title">{task.title}</h2>
                    <div className="badge">{task.priority}</div>
                  </div>
                  <p>{task.description}</p>
                  <p>Deadline: {task.deadline}</p>

                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Edit Task</button>
                    <button className="btn bg-red-500 text-white">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {filteredTasks?.map((task) => (
              <div className="card  shadow-lg my-4" key={task.title}>
                <div className="card-body ">
                  <div className="flex items-center">
                    <h2 className="card-title">{task.title}</h2>
                    <div className="badge">{task.priority}</div>
                  </div>
                  <p>{task.description}</p>
                  <p>Deadline: {task.deadline}</p>

                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Edit Task</button>
                    <button className="btn bg-red-500 text-white">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashBoardHome;
