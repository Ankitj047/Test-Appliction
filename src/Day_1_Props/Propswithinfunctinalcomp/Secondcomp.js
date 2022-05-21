import React from 'react'
import PropTypes from 'prop-types';

function Secondcomp(props) {
  return (
      <>
    <div>I am learning {props.subject}</div>
    <div>I have done {props.class} in {props.stream}</div>
    </>
  )
}

export default Secondcomp
