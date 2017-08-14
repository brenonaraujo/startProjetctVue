import { isEmpty } from 'lodash'

export const isLoged = state => !isEmpty(state.token)
