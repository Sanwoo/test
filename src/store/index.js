import todoApp from './reducers'
import { legacy_createStore as createStore } from 'redux'

const store = createStore(todoApp)

export default store