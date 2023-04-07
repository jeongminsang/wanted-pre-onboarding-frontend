import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  background: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #c6d9e7;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-shadow:  2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 20px;
  margin-right: 10px;
  width: 250px;
  font-size: 16px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    border: none;
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;
const Ul = styled.ul`
  /* width: 350px; */
  width: 352px;
  margin: 0;
  padding-left: 0px;
`;
const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0px 0px 10px 0px;
`;
const TodoText = styled.label`
  display: flex;
  width: 244px;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    outline: none;
    transition: all 0.3s ease-in-out;
    position: relative;
    cursor: pointer;

    &:checked {
      border-color: #2ecc71;
    }
  }
`;
const LiInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 9px;
  width: 236px;
  font-size: 16px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    border: none;
  }
`;
const LiButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0px 0px 0px 5px;
  color: black;
  font-size: 12px;
  cursor: pointer;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

function Main() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');
  const [modifyToggle, setModifyToggle] = useState(false);
  const [modifiedId, setModifiedId] = useState<number | null>(null);
  const [modifiedTodo, setModifiedTodo] = useState<string>('');

  const todolist = () => {
    axios
      .get("https://www.pre-onboarding-selection-task.shop/todos", {
        headers: { Authorization: localStorage.token }
      })
      .then((res) => {
        const { data } = res;
        setTodos(data);
        console.log(data)
      })
      .catch((error) => console.log(error));
  }
  
  const addtodo = () => {
    axios
      .post("https://www.pre-onboarding-selection-task.shop/todos",
      { 
        "id": 1,
        "todo": `${text}`,
        "isCompleted": false,
        "userId": 1
      }, 
      { headers: { Authorization: localStorage.token }})
      .then(() => {
        todolist();
      })
      .catch((error) => console.log(error));
  }
  
  const deletetodo = (id: string | undefined) => {
    axios
      .delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      { headers: { Authorization: localStorage.token }})
      .then(() => {
        todolist();
      })
      .catch((error) => console.log(error));
  }
  
  const checktodo = (el: Todo, check: boolean) => {
    axios
      .put(`https://www.pre-onboarding-selection-task.shop/todos/${el.id}`,
      { 
        "todo": el.todo,
        "isCompleted": check,
      },
      { headers: { Authorization: localStorage.token }})
      .then(() => {
        todolist();
      })
      .catch((error) => console.log(error));
  }
  
  const addInputhandle = () =>{
    addtodo();
    setText('');
  }

  const handleModifyClick = (id: number, todo: string) => {
    setModifiedId(id);
    setModifiedTodo(todo);
    setModifyToggle(true);
  }

  const handleModifyCancel = () => {
    setModifiedId(null);
    setModifiedTodo('');
    setModifyToggle(false);
  }

  const handleModifySubmit = () => {
    const index = todos.findIndex((todo) => todo.id === modifiedId);
    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[index].todo = modifiedTodo;
      setTodos(updatedTodos);
      setModifiedId(null);
      setModifiedTodo('');
      setModifyToggle(false);
    }
  }

  useEffect(() => {
    todolist();
  }, [])

  return (
    <>
      <MainContainer>
        <FormContainer>
          <Title>TodoList</Title>
          <div>
            <Input
              data-testid="new-todo-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button data-testid="new-todo-add-button" onClick={addInputhandle}>
              추가
            </Button>
          </div>
          <Ul>
            {todos.map((el) => (
              <Li key={el.id}>
                {modifiedId === el.id ? (
                  <>
                    <LiInput
                      type="text"
                      value={modifiedTodo}
                      onChange={(e) => setModifiedTodo(e.target.value)}
                    />
                    <LiButton onClick={handleModifySubmit}>제출</LiButton>
                    <LiButton onClick={handleModifyCancel}>취소</LiButton>
                  </>
                ) : (
                  <>
                    <TodoText>
                      <input
                        type="checkbox"
                        defaultChecked={el.isCompleted}
                        onChange={(e) => checktodo(el, e.target.checked)}
                      />
                      <span>{el.todo}</span>
                    </TodoText>
                    <LiButton
                      data-testid="modify-button"
                      onClick={() => handleModifyClick(el.id, el.todo)}
                    >
                      수정
                    </LiButton>
                    <LiButton
                      data-testid="delete-button"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        const id = e.currentTarget.dataset.id;
                        deletetodo(id);
                      }}
                      data-id={el.id}
                    >
                      삭제
                    </LiButton>
                  </>
                )}
              </Li>
            ))}
          </Ul>
        </FormContainer>
      </MainContainer>
    </>
  )
}
export default Main;