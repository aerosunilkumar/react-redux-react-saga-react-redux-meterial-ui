import React from "react";
import { connect } from "react-redux";
import Dashboard from './components/dashboardContainer'
import AddTask from './components/addTaskContainer'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Dashboard />
        <AddTask />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
