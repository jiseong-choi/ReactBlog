import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { message } from 'antd';

function LadingPage(props){

    useEffect(() => {
        axios.get('')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                } else {
                    message.error('글을 불러오지못했습니다.')
                }
            })
    },[])

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'90vh' }}>
            
        </div>
    )
}

export default withRouter(LadingPage);