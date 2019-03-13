import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="py-5 text-center">
          <img src={logo} className="App-logo" alt="logo" style={{height: '240px'}} />
          <h1>React board</h1>
          <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>

        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Latest topics</span>
          <Link to="/create" class="btn btn-primary">Add Board</Link>
          {/* <span class="badge badge-secondary badge-pill">3</span> */}
        </h4>
        <ul className="list-group mb-3">
          {this.state.boards.map(board =>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <Link to={`/show/${board.key}`}><h6 class="my-0">{board.title}</h6></Link>
              <small class="text-muted">{board.description}</small>
            </div>
            <span class="text-muted">{board.author}</span>
          </li>
          )}
        </ul>
        
      </div>
    );
  }
}

export default App;