import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import MyVerticallyCenterdModal from "./UpdateTask";
import { useSelector } from "react-redux";
import { removeTaskFormList } from "../store/taskSlice";
import { useDispatch } from "react-redux";
import { setSelectedTask } from "../store/taskSlice";

const TasksList = () => {
  const dispatch = useDispatch();

  const { tasksList } = useSelector((state) => state.task);

  const updateTask = (task) => {
    setModalShow(true);
    dispatch(setSelectedTask(task))
  };
  const deleteTask = (task) => {
     dispatch(removeTaskFormList(task))
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <section>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task , index) => {
              return (
                <tr className="text-center" key={task.id}>
                  <td>{index +1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask(task)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary" onClick={() => deleteTask(task)}>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyVerticallyCenterdModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};

export default TasksList;
