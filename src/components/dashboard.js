import React, { Component } from "react";
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class Dashboard extends Component {
  static propTypes = {
    todoList: PropTypes.array,
    isLoading: PropTypes.bool,
    initTodoItemForUpdate:PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.featchToDoItemsList();
  }

  handleToggle = value => () => {
  
  }

  edit = todoitem => () => {
    this.props.initTodoItemForUpdate(todoitem);
  }

  render() {
    const { isLoading, todoList } = this.props;
    return (
      <h1>
        {isLoading &&
          <CircularProgress />}
           <List>
          {todoList.map(todoItem => (
            <ListItem key={todoItem.id} dense button >
              <ListItemText primary={`Line item ${todoItem.title}`} onClick={this.edit(todoItem)} />
              <ListItemSecondaryAction>
                <Checkbox disabled={ todoItem.completed}
                  onChange={this.handleToggle(todoItem.id)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </h1>
    );
  }
}
export default Dashboard;