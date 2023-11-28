import { useRouter } from 'next/router'
import React from 'react'
import carsData from '../../data/carsData'
import CarDetails from '../../components/templates/CarDetails'

function carDetails() {
    const router = useRouter()
    const {carId} = router.query
     const carDetails = carsData[carId-1]
  return (
    <div><CarDetails {...carDetails} /></div>
  )
}

export default carDetails