import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

class TripsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: [],
      inputValue: ''
    }
	}

  getTrips() {
    axios.get('http://localhost:3000/api/v1/trips')
    .then(response => {
      this.setState({trips: response.data})
    })
    .catch(error => console.log(error))
  }
  
  createTrip = (e) => {
    if (e.key === 'Enter' && !(e.target.value === '')) {
      axios.post('http://localhost:3000/api/v1/trips', {trip: {title: e.target.value}})
      .then(response => {
        const trips = update(this.state.trips, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          trips: trips,
          inputValue: ''
        })
      })
      .catch(error => console.log(error))      
    }    
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  updateTrip = (e, id) => {
    axios.put(`http://localhost:3000/api/v1/trips/${id}`, {trip: {done: e.target.checked}})
    .then(response => {
      const tripIndex = this.state.trips.findIndex(x => x.id === response.data.id)
      const trips = update(this.state.trips, {
        [tripIndex]: {$set: response.data}
      })
      this.setState({
        trips: trips
      })
    })
    .catch(error => console.log(error))      
  }

  deleteTrip = (id) => {
    axios.delete(`http://localhost:3000/api/v1/trips/${id}`)
    .then(response => {
      const tripIndex = this.state.trips.findIndex(x => x.id === id)
      const trips = update(this.state.trips, {
        $splice: [[tripIndex, 1]]
      })
      this.setState({
        trips: trips
      })
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getTrips()
	}

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="taskInput" type="text" 
            placeholder="Enter a trip here.." maxLength="70"
            onKeyPress={this.createTrip}
            value={this.state.inputValue} onChange={this.handleChange} />
            <br/>
        </div>        
        <div className="listWrapper">
          <ul className="taskList">
            {this.state.trips.map((trip) => {
              return(
                <li className="task" key={trip.id}>
                  <input className="taskCheckbox" type="checkbox" 
                    checked={trip.done}
                    onChange={(e) => this.updateTrip(e, trip.id)} />              
                  <label className="taskLabel">{trip.title}, Date Added On: {trip.date_added}</label>
                  <span className="deleteTaskBtn" 
                    onClick={(e) => this.deleteTrip(trip.id)}>
                    x
                  </span>
                </li>
              )       
            })}        
          </ul>
        </div>
      </div>
    )
  }
}

export default TripsContainer

// import { useEffect, useState } from 'react';
// import './TripsContainer.css'; 
// import TripList from './TripList';

// const TripURL = "http://localhost:3000/api/v1/trips"

// function TripsContainer() {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     fetch(TripURL, {
//       headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//       }
//   }
//       )
//     .then(res => res.json())
//     .then(json => setTrips(json))
//     .catch((error) => console.log(error));
//   }, [])

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Add a place to visit...</h1>
//         </div>
//         <div className='TripInputContainer'>
//           <input className='tripInput' placeholder="Enter Trip Name"/>
//             </div>
//       <TripList trips={trips} />
//     </div>
//   );
// }

// export default TripsContainer;