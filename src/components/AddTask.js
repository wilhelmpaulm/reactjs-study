import React, { useState } from "react";

import PropTypes from "prop-types";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
      e.preventDefault();
    if (!text) {
      return alert("please set text first");
    }

    onAddTask({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
    console.log("new reminder set");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day and time</label>
        <input
          type="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add day and time"
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set reminder</label>
        <input
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save task" />
    </form>
  );
};

AddTask.propTypes = {};

export default AddTask;
