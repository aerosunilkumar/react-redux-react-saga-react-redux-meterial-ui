import * as types from "../actions/types";
import initialState from "./initialState";

export default (state = initialState.dashboardData, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_STARTED:
      return {
        ...state,
        isLoading: true,
        todoList: [],
        fetchTodoListError: undefined,
      };
    case types.FETCH_TODOS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        todoList: action.payload,
        fetchTodoListError: undefined,
      };
    case types.FETCH_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        todoList: [],
        fetchTodoListError: action.payload,
      };
    case types.FETCH_COMPLETE_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
        fetchTodoListError: undefined
      };
    case types.FETCH_COMPLETE_TODO_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        fetchTodoListError: undefined,
        todoList: action.payload,
      };
    case types.FETCH_COMPLETE_TODO_FAILED:
      return {
        ...state,
        fetchTodoListError: action.payload,
        isLoading: false
      };
      case types.FETCH_COMPLETE_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
        fetchTodoListError: undefined
      };
    case types.FETCH_DELETE_TODO_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        fetchTodoListError: undefined,
        todoList: action.payload,
      };
    case types.FETCH_DELETE_TODO_FAILED:
      return {
        ...state,
        fetchTodoListError: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
