import React ,{createContext, useContext} from 'react'
import './UseContextHook.css'

export const LoginContext = createContext({});
const UseContextHook = () => {
  const {loggedin,setLoggedin} = useContext(LoginContext);
  
  return (
    <div className="container">
      <ul>
        <li>React Context is a way to manage state globally.</li>
        <li>It can be used together with the useState Hook to nested components more easily</li>
        <li>Steps :-
          <ol>
            <li>To create context, you must Import createContext and initialize it.</li>
            <li>Next we'll use the Context Provider to wrap the tree of components that need the state Context</li>
            <li>Wrap child components in the Context Provider and supply the state value.</li>
            <li>First, include the useContext in the import statement:</li>
          </ol>
        </li>
      </ul>
    <div className='cont'>
      <button onClick={()=> setLoggedin(!loggedin)}>{loggedin?"Sign Out":"Log In"}</button>
    </div>
    </div>
  )
}

export default UseContextHook
