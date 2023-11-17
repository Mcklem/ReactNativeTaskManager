import React, { createContext, useContext, useEffect, useReducer } from 'react';
import TaskAdapter from '../../adapters/Task';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

  const initialState = {
    tasks: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_TASKS':
        return { ...state, tasks: action.payload };
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'UPDATE_TASK':
        return { ...state, tasks: [...state.tasks.filter((task) => task.id != action.payload.id), action.payload] };
      case 'REMOVE_TASK':
        return { ...state, tasks: [...state.tasks.filter((task) => task.id != action.payload.id)] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    TaskAdapter.getTasks()
      .then((tasks) => {
        dispatch({ type: 'SET_TASKS', payload: tasks });
      });

  }, []);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};