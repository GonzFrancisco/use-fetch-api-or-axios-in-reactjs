import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      hlinks: [
        { name: 'Fetch API', action: this.callFetch },
        { name: 'Axios', action: this.callAxios }
      ]
    }

  }

  callFetch = () => {    
    this.clearUserState();
    fetch('https://randomuser.me/api/?results=4')
    .then( res => res.json())
    .then( json => {
      json.results.map(r => {
        const { name, phone, email, picture } = r;
        this.setState({
          users: [...this.state.users, {
            name,
            phone,
            email,
            picture,
          }]
        })
      })    
    })
  }

  callAxios = () => {
    this.clearUserState();
    axios.get('https://randomuser.me/api/?results=4')
    .then(res => (res.data.results))
    .then( json => {
      json.map(r => {
        const { name, phone, email, picture } = r;
        this.setState({
          users: [...this.state.users, {
            name,
            phone,
            email,
            picture,
          }]
        })
      })    
    })
  }

  clearUserState = () => {
    this.setState({ users: []});
  }

  render() {
    return (
      <Fragment>
        <Header links={ this.state.hlinks } />
        <Content list={ this.state.users } />
      </Fragment>
    );
  }
}

export default App;
