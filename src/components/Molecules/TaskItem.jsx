import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../Atoms/CheckBox";
import DeleteButton from "../Atoms/DeleteButton";
import InputField from "../Atoms/InputField";
import Label from "../Atoms/Label";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 1px;
  background-color: white;
  z-index: 1;
`;

const DeleteBox = styled.div`
  width: 10%;
  height: 53px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: none;
  ${Container}:hover & {
    display: block;
  }
`;

const Div = styled.div`
  width: 90%;
  margin-left: ${(props) => (props.margin ? "10%" : "0")};
`;

const Index = ({ text, index, checked, setTaskItem, taskItems, taskId }) => {
  const [fieldFlag, setFieldFlag] = useState(false);

  const handelDoubleClick = () => {
    setFieldFlag(!fieldFlag);
  };
  return (
    <Container>
      {fieldFlag ? (
        <Div margin>
          <InputField
            fieldFlag={fieldFlag}
            text={text}
            setFieldFlag={setFieldFlag}
            setTaskItem={setTaskItem}
            taskItems={taskItems}
            taskId={taskId}
          />
        </Div>
      ) : (
        <>
          <CheckBox
            checked={checked}
            setTaskItem={setTaskItem}
            taskItems={taskItems}
            taskId={taskId}
          />
          <Div onDoubleClick={() => handelDoubleClick()}>
            <Label text={text} checked={checked} taskId={taskId} />
          </Div>

          <DeleteBox>
            <DeleteButton
              taskItems={taskItems}
              index={index}
              taskId={taskId}
              setTaskItem={setTaskItem}
            />
          </DeleteBox>
        </>
      )}
    </Container>
  );
};

export default Index;
