import React, { useState  } from 'react'
import { Layout } from 'antd'
import style from './index.less'
const { Header } = Layout

export default function Heade () {
    const [title, setTitle] = useState('我是标题')
    return (
        <Header className={ style['ant-layout-header'] }>{ title }</Header>
    )
}