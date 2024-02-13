import axios from "axios";

interface Todo {
  body?: string;
  title: string;
  id: string;
  userId: string;
}

export const createTodo = async (v: Todo) => {
  const res = await axios.post("http://localhost:3000/api/add-todos", v);
  console.log(res);
  return res;
};
