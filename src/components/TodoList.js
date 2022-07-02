import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
import '../App.css';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem('taskList');
        if (arr) {
            let obj = JSON.parse(arr); //json to object
            setTaskList(obj);
        }
    });
    // first we add a task,if we reload page, created task will disapper, so useEffect is used here to capture data from localStorage

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = taskObj => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    const toggle = () => {
        setModal(!modal);
    };
    return (
        <>
            <div class='header text-center'>
                <h3 className='title'>To Do list</h3>
                <h6 className='title1'>Reminds Everythings</h6>
                <button class='btn btn-primary mt-2' onClick={() => setModal(true)}>
                    Create task
                </button>
            </div>
            <div class='task-container'>
                {taskList &&
                    taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;
