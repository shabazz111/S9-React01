import React from 'react'
import PageHoc from '../../components/PageHoc'

const Compo = () => {
  return (
    <div>Trucks</div>
  )
}


const Trucks = PageHoc(Compo)

export default Trucks