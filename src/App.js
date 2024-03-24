// import './App.css';
// import React, { PureComponent } from 'react'

// export default class App extends PureComponent {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
