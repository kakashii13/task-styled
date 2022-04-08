import { useTaskContext } from "../context/Context";

const useTask = (id) => {
  const { taskList, setTaskList } = useTaskContext();
  const index = taskList.findIndex((task) => task.id === id);
  const newTask = [...taskList];

  const onComplete = () => {
    newTask[index].complete = true;
    setTaskList(newTask);
  };

  const onDelete = () => {
    newTask.splice(index, 1);
    setTaskList(newTask);
  };

  const onAdd = (text) => {
    const newDate = new Date();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    console.log(day);
    const taskID = taskList.length + 1;
    newTask.push({
      id: taskID,
      text: text,
      complete: false,
      date: `${day}-${month}`,
    });
    setTaskList(newTask);
    console.log("first");
  };
  return {
    onAdd,
    onDelete,
    onComplete,
  };
};

export default useTask;
