import React from "react";
import { Row, Col } from "antd";
import Car from "./EvChart/Car";
import Chart from "./EvChart/Chart";
function Evchart() {
  return (
    <Row
    gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      style={{
        marginTop:'1rem',
        color:'black'
      }}
    >
      <Col gutter={24}
       style={{
        width:'100%'
      }}>
        <div>
          <h2>รายละเอียดการใช้งาน</h2>
        
        </div>
        <Car/>
        <Chart/>
         <div style={{
            marginTop:'2rem'
         }}>
            <button>หยุดการชาร์จ</button>
         </div>
      </Col>
    </Row>
  );
}

export default Evchart;
