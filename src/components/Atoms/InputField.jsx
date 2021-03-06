import React from "react";
import styled, { css } from "styled-components";
import shortid from "shortid";

const Input = styled.input.attrs((props) => ({
  placeholder: "What needs to be done?",
  defaultValue: props.fieldFlag ? props.text : "",
}))`
  display: block;
  padding: 16px 0px;
  padding-right: 16px;
  padding-left: ${(props) => (props.fieldFlag ? "10px" : "60px")};
  width: 100%;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: inherit;
  font-weight: 100;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  ${(props) =>
    props.fieldFlag &&
    css`
      border: solid 1px black;
      box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    `}
  ::placeholder {
    color: #d9d9d9;
  }
`;

const Index = ({
  setTaskItem,
  fieldFlag,
  taskItems,
  text,
  setFieldFlag,
  taskId,
}) => {
  const createTask = (e) => {
    if (!e.currentTarget.value) return;

    if (fieldFlag && e.keyCode === 13) {
      const text = e.currentTarget.value;
      const newObj = { text, taskId };
      const newTaskItems = taskItems.map((obj) => {
        return obj.taskId === taskId ? newObj : obj;
      });
      localStorage.setItem("taskItems", JSON.stringify(newTaskItems));
      setFieldFlag(false);
      setTaskItem(newTaskItems);
    } else if (e.keyCode === 13) {
      const text = e.currentTarget.value;
      e.currentTarget.value = "";
      const taskId = shortid.generate();
      const newTaskItems = taskItems.concat({ text, taskId, checked: false });
      localStorage.setItem("taskItems", JSON.stringify(newTaskItems));
      setTaskItem(newTaskItems);
    }
  };

  return (
    <Input text={text} fieldFlag={fieldFlag} onKeyUp={(e) => createTask(e)} />
  );
};

export default Index;
