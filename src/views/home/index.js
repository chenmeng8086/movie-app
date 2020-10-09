import React from 'react'
import { connect } from 'react-redux'
import style from './index.less'
import MyHeader from '../../components/header'

import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

class Home extends React.Component {
    render () {
        return (
            <Layout className="layout">
                <MyHeader></MyHeader>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb className={ style['ant-breadcrumb'] } style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
function mapStateToProps (state, ownProps) {
    return { ...state.stateA }
}
function mapDispatchToProps (dispach) {
    return {
        changeName: (value) => dispach({
            type: 'A-changeName',
            value: value
        })
    }
}