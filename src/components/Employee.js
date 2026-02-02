function Employee(props) {
  return (
    <>
      <h3>Employee {props.name}</h3>
      <p>{props.role ? props.role : 'No role assigned'}</p>
      <p>{props.exp ? props.exp : 'No experience level assigned'}</p>
    </>
  )
}

export default Employee
