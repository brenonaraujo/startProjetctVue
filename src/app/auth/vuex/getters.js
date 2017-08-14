import { isEmpty } from 'lodash'

export const isLoged = state => !isEmpty(state.token)
export const currentUser = state => (state.user)
