import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    };


    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'taskName') {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div class='form-group'>
                        <label class='mb-2'>Task Name</label>
                        <input
                            type='text'
                            class='form-control'
                            value={taskName}
                            onChange={handleChange}
                            name='taskName'
                        />
                    </div>
                    <div class='form-group'>
                        <label class='mb-2 mt-3'>Discription</label>
                        <textarea
                            rows='4'
                            class='form-control'
                            value={description}
                            onChange={handleChange}
                            name='description'
                        ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={handleUpdate}>
                    Update
                </Button>
                <Button color='secondary' onClick={toggle}>
                    cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup;
