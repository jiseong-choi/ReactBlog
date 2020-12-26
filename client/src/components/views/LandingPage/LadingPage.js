import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

function LadingPage(props){


    React.useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response))
    }, [])

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height:'90vh' }}>
            <h2>
                시작 페이지
            </h2>
        </div>
    )
}

export default withRouter(LadingPage);