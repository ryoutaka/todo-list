import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputField from "../Atoms/InputField";
import TaskItem from "../Molecules/TaskItem";
import Footer from "../Molecules/Footer";
import { gql, useQuery } from "@apollo/client";

const TASK_ITEMS = gql`
  query taskItems {
    taskItems {
      id
      text
      checked
    }
  }
`;

const Container = styled.div`
  max-width: 550px;
  min-width: 250px;
  margin: 0 auto;
  font: 24px "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
`;

const Li = styled.li`
  list-style: none;
`;

const Index = () => {
  const { loading, error, data } = useQuery(TASK_ITEMS);
  const [taskItems, setTaskItem] = useState([]);

  if (loading) {
    return <p>loding</p>;
  }
  
  const array = data.taskItems.map((obj, i) => {
    return (
      <Li key={`${i}${JSON.stringify(obj)}`}>
        <TaskItem
          text={obj.text}
          index={i}
          taskId={obj.id}
          isChecked={obj.checked}
          taskItems={data.taskItems}
        />
      </Li>
    );
  });

  return (
    <Container>
      <InputField taskItems={taskItems} />
      <ul>{array}</ul>
      {!!array.length && <Footer taskItems={data.taskItems} />}
    </Container>
  );
};

export default Index;
