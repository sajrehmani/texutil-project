import React from 'react'

export default function Alert(props) {
    debugger
  return (
    
    props.alertDetail && <div className={`alert alert-${ props.alertDetail.type} alert-dismissible fade show my-3`} role="alert">
    <strong>{ props.alertDetail.message}</strong>
   
  </div>
  )
}
