import uuid from "uuid/v4";
const defaultTodoList = [
  {
    id: uuid(),
    task: "Learn React",
    completed: true,
  },
  {
    id: uuid(),
    task: "Learn Vue",
    completed: true,
  },
  {
    id: uuid(),
    task: "Learn Bootstrap",
    completed: false,
  },
];
const initialTodoList =
  JSON.parse(localStorage.getItem("initial_list")) || defaultTodoList;
export default initialTodoList;
