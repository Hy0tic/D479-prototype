import { Navbar } from "../components/Navbar";
import React, { useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box } from "../components/TripPlanner";
import { DropArea } from "../components/TripPlanner";
import styled from "styled-components";
import { useState } from "react";
import DatePickerComponent from "../components/DatePicker";
import SavePageAsImage from "../components/SavePageAsImage";


export default function PlanningTools() {
  const [selectedDate, setSelectedDate] = useState('');
  const [formattedDateAfterFiveDays, setFormattedDateAfterFiveDays] = useState('');
  const [droppedBoxIds, setDroppedBoxIds] = useState([]);
  const [droppedBoxIds2, setDroppedBoxIds2] = useState([]);
  const [droppedBoxIds3, setDroppedBoxIds3] = useState([]);
  const [droppedBoxIds4, setDroppedBoxIds4] = useState([]);
  const [droppedBoxIds5, setDroppedBoxIds5] = useState([]);


  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);

    // Calculate 5 days ahead
    const resultDate = new Date(newDate);
    resultDate.setDate(resultDate.getDate() + 5); // Add 5 days

    // Format the date as "Day of the Week, Day Month"
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = resultDate.toLocaleDateString('en-US', options);
    setFormattedDateAfterFiveDays(formattedDate);
  };

  const formatDate = (x) => {
    const resultDate = new Date(selectedDate);
    resultDate.setDate(resultDate.getDate() + x);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = resultDate.toLocaleDateString('en-US', options);
    return formattedDate.toString();
  }

  const handleDrop = useCallback((id) => {
    setDroppedBoxIds((prevIds) => [...prevIds, id]);
  }, []);

  const handleDrop2 = useCallback((id) => {
    setDroppedBoxIds2((prevIds) => [...prevIds, id]);
  }, []);

  const handleDrop3 = useCallback((id) => {
    setDroppedBoxIds3((prevIds) => [...prevIds, id]);
  }, []);

  const handleDrop4 = useCallback((id) => {
    setDroppedBoxIds4((prevIds) => [...prevIds, id]);
  }, []);
  
  const handleDrop5 = useCallback((id) => {
    setDroppedBoxIds5((prevIds) => [...prevIds, id]);
  }, []);



  const removeBoxFromDropArea = useCallback((id) => {
    setDroppedBoxIds((prevIds) => prevIds.filter(boxId => boxId !== id));
  }, []);
  
  const removeBoxFromDropArea2 = useCallback((id) => {
    setDroppedBoxIds2((prevIds) => prevIds.filter(boxId => boxId !== id));
  }, []);

  const removeBoxFromDropArea3 = useCallback((id) => {
    setDroppedBoxIds3((prevIds) => prevIds.filter(boxId => boxId !== id));
  }, []);

  const removeBoxFromDropArea4 = useCallback((id) => {
    setDroppedBoxIds4((prevIds) => prevIds.filter(boxId => boxId !== id));
  }, []);

  const removeBoxFromDropArea5 = useCallback((id) => {
    setDroppedBoxIds5((prevIds) => prevIds.filter(boxId => boxId !== id));
  }, []);
    return (
      <>
        <Navbar/>

        <DndProvider backend={HTML5Backend}>
        <h1 style={{textAlign:'center'}}>Plan a 5 day vacation</h1>
        <div>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
          <p>Selected Date: {selectedDate}</p>
        </div>
        <SavePageAsImage/>

          <div style={{ padding: '32px' }}>
            <StyledContainer>
              <DropArea onDrop={handleDrop} label={formatDate(0) !== 'Invalid Date' ? formatDate(0) : "select date first"}>
                {droppedBoxIds.map((id) => (
                  <Box key={id} id={id} onRemove={removeBoxFromDropArea}>{`${id}`}</Box>
                ))}
              </DropArea>

              <DropArea onDrop={handleDrop2} label={formatDate(1) !== 'Invalid Date' ? formatDate(1) : "select date first"}>
                {droppedBoxIds2.map((id) => (
                  <Box key={id} id={id} onRemove={removeBoxFromDropArea2}>{`${id}`}</Box>
                ))}
              </DropArea>

              <DropArea onDrop={handleDrop3} label={formatDate(2) !== 'Invalid Date' ? formatDate(2) : "select date first"}>
                {droppedBoxIds3.map((id) => (
                  <Box key={id} id={id} onRemove={removeBoxFromDropArea3}>{`${id}`}</Box>
                ))}
              </DropArea>

              <DropArea onDrop={handleDrop4} label={formatDate(3) !== 'Invalid Date' ? formatDate(3) : "select date first"}>
                {droppedBoxIds4.map((id) => (
                  <Box key={id} id={id} onRemove={removeBoxFromDropArea4}>{`${id}`}</Box>
                ))}
              </DropArea>

              <DropArea onDrop={handleDrop5} label={formatDate(5) !== 'Invalid Date' ? formatDate(4) : "select date first"}>
                {droppedBoxIds5.map((id) => (
                  <Box key={id} id={id} onRemove={removeBoxFromDropArea5}>{`${id}`}</Box>
                ))}
              </DropArea>
            </StyledContainer>
            
            <StyledActivityContainer>
              {['Beach', 'Hiking and Exploration','Cultural Tours','Water Sports', 'Spa and Wellness'].map((id) => (
                <Box key={id.toString()} id={id.toString()}>{`${id.toString()}`}</Box>
              ))}
            </StyledActivityContainer>
          </div>

        </DndProvider>
      </>
    );
  }

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
`

const StyledActivityContainer = styled.div`
 background-color: gray;
`

