import React from 'react'
import PropTypes from 'prop-types'
import Secondcomp from './Secondcomp'


function one(props) {
  return (
    <>
    <div>my name is {props.name}</div>
    <Secondcomp class = "BTECH" stream= "Mechanical"/>
    </>
  )
}


export default one
