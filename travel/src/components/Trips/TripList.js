export default function TripList({ trips }) {
    return (
    //   <ul>
    //     {trips.map((trip) => (
    //       <li key={trip.id}>
    //           {trip.completed}
    //           {trip.date_added}
    //           </li>
    //     ))}
    //   </ul>

    trips.map((trip) => (
        <div className="box" key={trip.id}>
          <h1><b>{trip.location}</b></h1>
          <input className="tripCheckbox" type="checkbox" />
          <p>Completed? {trip.completed}</p>
                 
          <p>Added on: {trip.date_added}</p>          
          <button type="button" class="btn-close" aria-label="Close" onClick=''></button>
        </div>
      ))
    );
  }
  