import React from 'react'
import Home from '../routes/Home'
import PrivateRoute from '../routes/privateRoute';
function home() {
    return (
        <div>
            <PrivateRoute><Home /></PrivateRoute>
        </div>
    )
}

export default home
