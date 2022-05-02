import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
  } from '@chakra-ui/react'
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  
  import {
    useJsApiLoader, //Provides hook with a variable isLoaded - whether map loaded or not
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import React, { useRef, useState } from 'react'

  // import useGeolocation from 'react-hook-geolocation'

  // const ComponentWithGeolocation = () => {
  //   const geolocation = useGeolocation()
  
  //   return !geolocation.error
  //     ? (
  //       <ul>
  //         <li>Latitude:          {geolocation.latitude}</li>
  //         <li>Longitude:         {geolocation.longitude}</li>
  //         <li>Location accuracy: {geolocation.accuracy}</li>
  //         <li>Altitude:          {geolocation.altitude}</li>
  //         <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
  //         <li>Heading:           {geolocation.heading}</li>
  //         <li>Speed:             {geolocation.speed}</li>
  //         <li>Timestamp:         {geolocation.timestamp}</li>
  //       </ul>
  //     )
  //     : (
  //       <p>No geolocation, sorry.</p>
  //     )
  // }
  
  // function Loc() {
  //   const [latitude, setLatitude] = React.useState('');
  //   const [longtitude, setLongtitude] = React.useState('');
  //   React.useEffect(() => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLatitude(position.coords.latitude)
  //       setLongtitude(position.coords.longtitude)
  //     })
  //   })
  // }



  

  const center = { lat: -27.47031, lng: 153.01708 }

  function Map() {
    const { isLoaded } = useJsApiLoader({ //Provides hook with a variable isLoaded - whether map loaded or not
      GoogleMap,
      googleMapsApiKey: "AIzaSyCEImQf7-c8Twzgk6ys1TrISr5wWbWTLTo",
      libraries: ['places'],
    })
  
    const [map, setMap] = useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [distanceF, setDistanceF] = useState('')
    const [durationF, setDurationF] = useState('')
  
    
    const originRef = useRef()
    const destinationRef = useRef()
    //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
    //The returned object will persist for the full lifetime of the component.

    
    // onClick={() => {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       map.setZoom(18.5)
    //       map.panTo({
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       });
    //     },
    //   );
    // }}
  
    if (!isLoaded) {
      return <SkeletonText />
    }
  

    async function calculateRoute() {
      if (originRef.current.value === '' || destinationRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,

      })

// DRIVING (Default) indicates standard driving directions using the road network.
// BICYCLING requests bicycling directions via bicycle paths & preferred streets.
// TRANSIT requests directions via public transit routes.
// WALKING requests walking directions via pedestrian paths & sidewalks.
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
      // setDistanceF(resultsF.routes[0].legs[0].distance.text)
      // setDurationF(resultsF.routes[0].legs[0].duration.text)
    }

    // Func calculateRoute should only be called when it is not empty
        // Line 83-84 - map shall be loaded by that point, so wont be complete error, want
    // no directions to be provided if the promise values of origin and destination is empty
    //ergo use of eslint syntax to:
    // Disallows the use of undeclared variables unless mentioned in /*global */ comments.


    async function calculateRouteF() {
      if (originRef.current.value === '' || destinationRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const resultsF = await directionsService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.WALKING,
        // eslint-disable-next-line no-undef
        // travelMode: google.maps.TravelMode.WALKING
      })
// DRIVING (Default) indicates standard driving directions using the road network.
// BICYCLING requests bicycling directions via bicycle paths & preferred streets.
// TRANSIT requests directions via public transit routes.
// WALKING requests walking directions via pedestrian paths & sidewalks.
      setDirectionsResponse(resultsF)
      setDistanceF(resultsF.routes[0].legs[0].distance.text)
      setDurationF(resultsF.routes[0].legs[0].duration.text)
    }

    // Func calculateRoute should only be called when it is not empty
    // Disallows the use of undeclared variables unless mentioned in /*global */ comments.
    // Line 83-84 - map shall be loaded by that point, so wont be complete error, want
    // no directions to be provided if the promise values of origin and destination is empty
  
    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      setDistanceF('')
      setDurationF('')
      // originRef.current.value = ''
      // destinationRef.current.value = ''
    }
  
    return (
      <div className='MapContainer'>
      <br></br>
      <br></br>
      <Flex
        position='static'
        flexDirection='column'
        alignItems='center'
        h='100vh'
        w='100vw'
      >
 
        <Box position='static' height='70%' width='70%'>
            
        <Box
          p={4}
          borderRadius='lg'
          m={4}
          bgColor='paleturquoise'
          shadow='base'
          zIndex='1'
        >
          <HStack spacing={2} justifyContent='space-between'>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input type='text' placeholder='Origin' ref={originRef} />
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                  type='text'
                  placeholder='Destination'
                  ref={destinationRef}
                />
              </Autocomplete>
            </Box>
  
            <ButtonGroup>
              <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                Show CAR route
              </Button>
              <Button colorScheme='pink' type='submit' onClick={calculateRouteF}>
              Show FOOT route
              </Button>
              <IconButton
                aria-label='center back'
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent='space-between'>
            <Text>Distance by CAR: {distance} </Text>
            <Text>Duration by CAR: {duration} </Text>
            <Text>Distance by FOOT: {distanceF} </Text>
            <Text>Duration by FOOT: {durationF} </Text>
            <Text>Current Location:  
            <IconButton
              aria-label='center back'
              icon={<FaLocationArrow />}
              isRound
              // onClick={() => {
              //   map.panTo(center)
              //   map.setZoom(15)
              // }}
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    map.setZoom(18.5)
                    map.panTo({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    });
                  },
                );
              }}
            />
            </Text>
          </HStack>
        </Box>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: true,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
      </Flex>
      </div>
    )
  }
  
  export default Map