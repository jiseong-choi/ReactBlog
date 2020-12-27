import React,{useState} from 'react'
import { Input, Form, message,Typography, Button } from 'antd'
import Axios from 'axios'
import { useSelector } from 'react-redux'; 
import { USER_SERVER } from '../../Config';
import { withRouter } from 'react-router-dom'

const { Title } = Typography;

function WritingPage(props) {

    const user = useSelector(state => state.user)

    const [ArticleTitle, setArticleTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Ariticle, setAriticle] = useState("")

    const titleOnChange = (e) => {
        e.preventDefault();
        setArticleTitle(e.currentTarget.value)
    }

    const descriptionOnChange = (e) => {
        e.preventDefault();
        setDescription(e.currentTarget.value)
    }

    const articleOnChange = (e) => {
        e.preventDefault();
        setAriticle(e.currentTarget.value)
    }


    const onSubmit = (e) => {
        const variable = {
            writer: user.userData._id,
            title: ArticleTitle,
            description: Description,
            article:Ariticle
        }
        console.log(variable)
        Axios.post(`api/article/write`, variable)
            .then(response => {
                if (response.data.success) {
                    message.success('글 업로드를 완료 했습니다.')
                    setTimeout(() =>{
                        props.history.push('/')
                    },3000)
                } else {
                    message.error('글 업로드에 실패 했습니다.')
                }
            })
    }

    return (
        <div style={{ margin:'auto' }}>
            <div>
                <Title level={2}>
                    글 작성
                </Title>
            </div>
            <Form onSubmit={onSubmit}>
                <br />
                <br />
                <label>
                    글 제목
                </label>
                <Input onChange={titleOnChange} value={ArticleTitle} style={{width:'500px'}} />
                <br />
                <label>
                    설명(부제)
                </label>
                <Input onChange={descriptionOnChange} value={Description} style={{width:'500px'}} />
                <br />
                <label>
                    글 작성
                </label>
                <br />
                <Input.TextArea onChange={articleOnChange} value={Ariticle} style={{ width: '800px' }} />
                
                <Button type="primary" size='large' onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default withRouter(WritingPage)
