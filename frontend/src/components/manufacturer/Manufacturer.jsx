import {useEffect, useState} from 'react';
import axios from 'axios';

const Manufacturer = () => {

  const [backendData, setBackendData] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/friends')
  //   .then((response) => {
  //     setBackendData(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // })

  useEffect(() => {
    axios.get('/api/manufacturers')
    .then((response) => {
      setBackendData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <div className='Manufacturer'>

    <h1>Manufacturers</h1>
    <p>No. of Manufacturers: {backendData.length}</p>
    {
      backendData.map((user,i) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.address}</p>
        </div>
      ))
    }

    </div>
  )
}

export default Manufacturer