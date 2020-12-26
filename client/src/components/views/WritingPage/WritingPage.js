import React,{useSelector,useState} from 'react'
import { Input, TextArea, Title, Form, message } from 'antd'
import Axios from 'axios'


function WritingPage(props) {

    const user = useSelector(state => state.user)

    const [ArticleTitle, setArticleTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Ariticle, setAriticle] = useState("")

    const titleOnChange = (e) => {
        e.preventDefault();
        setArticleTitle(e.current.value)
    }

    const descriptionOnChange = (e) => {
        e.preventDefault();
        setDescription(e.current.value)
    }

    const articleOnChange = (e) => {
        e.preventDefault();
        setAriticle(e.current.value)
    }


    const onSubmit = (e) => {
        const variable = {
            writer: user.userData._id,
            title: Ariticle,
            description: Description,
            article:Ariticle
        }
        Axios.post('', variable)
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
        <div style={{ margin:'auto'}}>
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
                <Input onChange={titleOnChange} value={ArticleTitle} />
                <br />
                <label>
                    설명(부제)
                </label>
                <Input onChange={descriptionOnChange} value={Description} />
                <br />
                <label>
                    글 작성
                </label>
                <TextArea onChange={articleOnChange} value={Ariticle} />
            </Form>
        </div>
    )
}

export default WritingPage
