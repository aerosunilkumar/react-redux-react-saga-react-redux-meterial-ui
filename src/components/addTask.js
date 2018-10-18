import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddTask extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
    addOrUpdateError: PropTypes.any,
    isLoading: PropTypes.bool
  };

  componentDidMount() {

  }
  handleChange() {

  }
  render() {
    const { title, description, id, completed } = this.props;
    return (
      <h1>
        {id}
        <TextField
          id="standard-name"
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <Button variant="outlined" color="primary" disabled={completed}>
          Completed
      </Button>
      </h1>
    );
  }
}

export default AddTask