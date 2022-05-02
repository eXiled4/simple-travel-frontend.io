import React, {Component} from 'react';
import Map from './Map/Map'
import { ChakraProvider, theme } from '@chakra-ui/react'
import TripsContainer from './Trips/TripsContainer'
import './Itinerary.css'

export default class Itinerary extends Component {
	  
	render() {
		return (			
			<div>
			 <div className='welcome'>
				</div>
				<br/>
				
 				<div className="container">
        			<div className="header">
          				<h1 className='header'>What's on my bucket list?</h1>
        			</div>
        			<TripsContainer />
      			</div>
				 <ChakraProvider theme={theme}>
						  <Map/>
					</ChakraProvider>
			</div>
			
		);
	}
}