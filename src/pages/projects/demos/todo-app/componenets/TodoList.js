import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from 'react';

import TodoItem from './TodoItem';

const TodoList = () => {

    let initialList = [
        {id: 1, text: 'Clean the office', done: true},
        {id: 2, text: 'Buy milk', done: false},
        {id: 3, text: 'Create todo app in React', done: false}
    ];

    let localList = JSON.parse(localStorage.getItem('todos'));

    if (localList){
        initialList = localList;
    }

    console.log(localList);

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState('');

    // watching list for changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list))
    }, [list]);

    const handleTextInput = (e) => {
        setTextInput(e.target.value);
    };

    let lastItem = list[list.length - 1];
    let id = 1;

    if (lastItem){
        id = lastItem.id + 1;
    }

    const addTodoItem = () => {
        let newTodo = {
            id: id,
            text: textInput,
            done: false
        };

        setList((prevList) => [...prevList, newTodo]);
        setTextInput('');
    };

    const deleteTodo = (id) => {
        const newList = list.filter((item) => {
            return item.id !== id;  
        });
        
        setList(newList);
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Enter'){
            addTodoItem();
        }
    }

    const markAsDone = (id) => {
        const newList = list.map((item) => {
            if(item.id === id){
                item.done = true;
            }

            return item;
        });

        setList(newList);
    };
        
    let todoItems = list.map((item) => {
        return <TodoItem key={item.id} todo={item} markAsDone={markAsDone} deleteTodo={deleteTodo} />
    });

    return(
        <Card>
            <Card.Header>TodoList</Card.Header>
            <Card.Body>
                <ListGroup>
                    {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <input type='text' onChange={handleTextInput} value={textInput} onKeyUp={handleKeyUp} />
                <Button variant='primary' className='float-end' onClick={addTodoItem}>Add</Button>
                {/* <Button variant='danger' className='float-end me-2' onClick={deleteTodoItem}>Delete</Button> */}
            </Card.Footer>
        </Card>
    );
};

export default TodoList;