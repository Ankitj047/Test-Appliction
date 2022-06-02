1. Mounting : component created, only state propes and constructor values get define 
    1. constructor()  : initial value get declare
    2. static getDerivedStateFromProps():  value get define by props and state
    3. render():  all the methods and functions execution
    4. componentDidMount(): component is mounted to the DOM 



2. Updating: 

          1. static getDerivedStateFromProps(): props and update states get render
          2. shouldComponentUpdate(): pass the boolean value for the child componet should render with the parent or Notification
          3. render(): rerender all the DOM 
          4. componentDidUpdate():  it receives the previous props and state as arguments

3. Unmounting:

1. componentWillUnmount():  sdcond component rerender so all the data of present dom will be unmount

