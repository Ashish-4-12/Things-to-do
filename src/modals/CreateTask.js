import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    let taskObj = {};
    taskObj['Name'] = taskName;
    taskObj['Description'] = description;
    save(taskObj);
  };

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
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
        <Button color='primary' onClick={handleSave}>
          Create
        </Button>
        <Button color='secondary' onClick={toggle}>
          cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
