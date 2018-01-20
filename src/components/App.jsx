import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseApp } from '../firebase'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut()
  }
  render() {
    return (
      <div style={{ margin: '5px' }}>
        <h3>Goals</h3>
        <AddGoal />
        <hr />
        <h4>Goals to Be Done</h4>
        <GoalList />
        <hr />
        <h4>Already Completed</h4>
        <CompleteGoalList />
        <hr />
        <button className="btn btn-danger" onClick={() => this.signOut()}>
          Sign out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
export default connect(mapStateToProps, null)(App)
