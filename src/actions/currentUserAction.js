import axios from 'axios'

import {
    LOGIN_USERS

} from '../actions/types'

// set alert
export const userLogin = (formData) => dispatch => {
    axios.post('http://localhost:3000/user/login/', formData)
        .then(res => {
            localStorage.setItem('jwt', res.data.jwt_token)
            this.props.history.push('/home/dashboard/sales')
        })
        .catch(err => console.log(err))
}