import axios from "axios";

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
}

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.token,
  },
});

export const getTodos = () => {
  return instance.get("/todos");
};

export const addTodo = ( text : string ) => {
  return instance.post("/todos", {
    id: 1,
    todo: text,
    isCompleted: false,
    userId: 1,
  });
};

export const deleteTodo = ( id: string | undefined ) => {
  return instance.delete(`/todos/${id}`);
};

export const checkTodo = ( el: Todo, check: boolean ) => {
  return instance.put(`/todos/${el.id}`, {
    todo: el.todo,
    isCompleted: check,
  });
};