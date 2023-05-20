import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users.slice'
import balance from './slices/balance.slice'

export default configureStore({
  reducer: {
    users,
    balance
	}
})