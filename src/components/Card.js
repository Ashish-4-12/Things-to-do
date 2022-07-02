import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#D4E7FF"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FFEEC7"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#D8FFD3"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FFD9D9"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#DCD1FF"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class="card-wrapper mr-5">
            <div class="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>
            <div class="task-holder">
                <span class="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i class="far fa-edit mr-5" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;