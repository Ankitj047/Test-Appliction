import React from 'react'
import PropTypes from 'prop-types'
import Secondcomp from './Secondcomp'


function one(props) {
  const {name} = props
  return (
    <>
    <div>my name is {name}</div>
      <Secondcomp Altclass = "BTECH" stream= "Mechanical"/>
    </>
  )
}


export default one
