import React from 'react'
import { Row, Col } from "antd";
import Thunder from '../../../public/Image/thunderBlack.png'
import Clock from '../../../public/Image/clock.png'
function Chart() {
  return (
    <Row  gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
    style={{
        color:'black',
        marginTop:'1.5rem'
    }}>
    <Col gutter={12} style={{
        width:'50%'
    }}>
        <div>
             <img src={Clock} style={{
                width:20,
                marginBottom:'-1rem'
             }}/>
            <div><h3>00:00:06</h3></div>
        </div>
        
    </Col>
    <Col gutter={12} style={{
        width:'50%'
    }}>
        <div>
             <img src={Thunder} style={{
                width:20,
                marginBottom:'-1rem'
             }}/>
            <div><h3>100 KW</h3></div>
        </div>
    </Col>
</Row>
  )
}

export default Chart