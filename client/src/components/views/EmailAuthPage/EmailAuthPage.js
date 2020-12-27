import React,{useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { useSelector } from 'react-redux'; 
import { Button, message } from 'antd';

function EmailAuthPage() {

    const user = useSelector(state => state.user)

    useEffect(() => {
        if (!user.userData) return
        const { email } = user.userData
        
        Axios.post('api/user/emailAuth', email)
            .then((response) => {
                if (response.data.success) {
                    
                } else {
                    message.error('이메일을 전송하지 못했습니다')
                }
            })
            }, [user])
    
    const sendMail = () => {
        if (!user.userData) return
        const { email } = user.userData
        console.log(email)
        Axios.post('api/user/emailAuth', email)
            .then((response) => {
                if (response.data.success) {
                    
                } else {
                    message.error('이메일을 보내지 못했습니다.')
                }
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'90vh' }}>
            EmailAuthPage
            <Button onClick={sendMail}>이메일 인증</Button>
        </div>
    )
}

export default withRouter(EmailAuthPage)
