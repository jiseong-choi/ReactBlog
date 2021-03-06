import React from 'react';
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent,option,adminRoute = null) {
    function AuthenticationCheck(props){

        const dispatch = useDispatch();
        React.useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response);

                if(!response.payload.isAuth) {
                    if(option === true) {
                        props.history.push('/login');
                    }
                }
                else if(response.payload.emailAuth ==false) {
                    props.history.push('/emailAuth')
                }else {
                    if(adminRoute&&!response.payload.isAdmin) {
                        props.history.push('/')
                    }else{
                        if(option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
           
        },[dispatch, props.history])
        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}