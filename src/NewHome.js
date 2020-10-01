
import React from 'react'
import Center from './Center'
import LeftSide from './LeftSide'
import TwitterFeed from './TwitterFeed'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from './Table'
import MoreArticles from './MoreArticles'
import './newHome.css'

function NewHome() {
    return (

<Container className="main_home">

    <Row className="toprow">
        <Col className="main__column col1" xs={12} sm={5} md={4} lg={3} xl={3}  ><LeftSide /></Col>
        <Col className="main__column col2" xs={12}  sm={7} md={5} lg={6} xl={6}  ><Center /></Col>
        <Col  className="col3" xs={12} sm={12} md={3} lg={3} xl={3}  ><TwitterFeed /></Col>
    </Row>
    <Row>
        <Col>
        <Table></Table>
        </Col>
        
    </Row>
    <Row>
        <Col>
        <MoreArticles />
        </Col>
    </Row>
</Container>

    )
}

export default NewHome
