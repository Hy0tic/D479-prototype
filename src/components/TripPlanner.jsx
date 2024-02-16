// Box.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';

export const Box = ({ id, onRemove, children }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    id: id,
    type: 'box',
    item: { id },
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        onRemove(id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        margin: '5px',
        backgroundColor: 'skyblue',
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
};


export const DropArea = ({ onDrop, label, children }) => {
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: 'box',
    drop: (item, monitor) => onDrop(item.id), // Only pass item.id to onDrop
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <FlexContainer>
    <label style={{textAlign:"center"}}>{label}</label>
    <div
      ref={dropRef}
      style={{
        width: '300px',
        height: '600px',
        border: '2px solid black',
        position: 'relative',
        overflow: 'auto',
        background: 'gray'
      }}
    >
      {children}
    </div>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

