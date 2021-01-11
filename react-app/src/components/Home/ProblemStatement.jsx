import React from 'react';
import {Row,Col,Button} from 'antd';
import './home.css';

function ProblemStatement(props) {
  return (
    <div className="ps">
    <Row>
      <Col lg={8} xs={24}>
        <div className="ps-p1">
          <iframe width="320" height="245" src={props.youtube}></iframe>
        </div>
      </Col>
      <Col lg={16} xs={24}>
      <div className="ps-p2">
        <h1>{props.title}</h1>
            <h4><em>{props.description}</em></h4>
            <Button type='primary' danger>
              <a href="http://www.aburobocon.net/" >
              More
              </a>
            </Button>
            
            
        </div>
      </Col>
    </Row>
    </div>
  )
}

export default ProblemStatement

