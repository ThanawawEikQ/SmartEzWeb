import React from 'react'
import {Row,Col,Card} from 'antd'
import Cabinet from '../assets/Image/charger.png'
import Thunder from '../assets/Image/thunder.png'
function Payment() {
    
  return (
    <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}>
        <Card style={{
            position:'relative',
            boxShadow:'1px 3px 8px rgba(0,0,0,0.2)',
            height:'auto'
        }}>
            <Col gutter={24}>
                <div style={{
                    width:'100%',
                    borderBottom:'5px solid' ,
                    borderColor:'rgba(46, 58, 188, 0.959)',
                    justifyContent:'center'
                    
                }}>
                    <h2>รายละเอียดการใช้งาน</h2>
                </div>
                <div style={{
                    marginTop:'3rem',
                    backgroundColor:'rgba(84, 150, 225, 0.16)',
                    borderRadius:'2.5rem',
                    padding:'1rem',
                    borderBottom:'.5rem solid #c8daf9'
                }}>
                    <img
                    style={{
                        width:'10rem',
                        height:'12rem',
                        marginLeft:'.5rem'
                    }} src={Cabinet}>
                    </img>
                </div>
                <div>
                  <div class="battery" style={{
                    backgroundColor:' rgba(142, 169, 232, 0.5)',
                    marginTop:'6rem'
                  }}>
                    <div style={{
                    display:'flex',
                    justifyContent:'center',
                    color:'white'
                    }}>
                        <img src={Thunder} style={{
                        width:'2.5rem',
                        height:'3rem',
                        position:'relative',
                        marginTop:'.7rem'
                        }} />
                        <h2 style={{position:'relative'}}>120Kw</h2>
                    </div>
                  </div>
                </div>

                <div  style={{
                        display:'flex',
                        justifyContent:'space-between',
                        gap:'1rem',
                        marginTop:'1.5rem'
                    }}>
                    <div>
                        <h4>เวลาเริ่มการชาร์จ</h4>
                        <p>2:00:44PM</p>
                    </div>
                    <div>
                    <h4>ระยะเวลาที่ชาร์จ(นาที)</h4>
                        <p>30</p>
                    </div>
                </div>
                <div style={{
                    marginTop:'1rem'
                }}>
                    <button>หยุดการชาร์จ</button>
                </div>
            </Col>
        </Card>

    </Row>
  )
}

export default Payment