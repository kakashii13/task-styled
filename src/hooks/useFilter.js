import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTaskContext } from "../context/Context";

const useFilter = () => {
  const { taskList } = useTaskContext();
  const [taskFilter, setTaskFilter] = useState([]);
  const { category } = useParams();

  const filter = taskList.filter((task) => task.tags.includes(category));

  useEffect(() => {
    if (category) {
      setTaskFilter(filter);
    } else return;
  }, [category]);

  return { taskFilter };
};

export default useFilter;
