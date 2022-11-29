import React, { useState } from 'react';
import { Card, Form, Row, Col, InputGroup } from 'react-bootstrap';

import './App.css';

function App() {
  const [input, setInput] = useState(0);                              // 입력값
  const [output, setOutput] = useState(0);                            // 결과값
  const [inputType, setInputType] = useState('시급');                 // 입력값 타입
  const [outputType, setOutputType] = useState('월급');               // 결과값 타입
  const [workingHour, setWorkingHour] = useState(0);                  // 일일 근무시간
  const [hollydayAllowance, setHollydayAllowance] = useState(1);      // 주휴수당
  const [tax, setTax] = useState(0);                                  // 세금
  const [probation, setProbation] = useState(1);                      // 적용시 0.9, 미적용시 1

  // 결과값 계산
  const submit = () => {

  }

  const changeInputType = (e) => {
    e.preventDefault();
    
    setInputType(e.target.value);
  }

  const changeOutputType = (e) => {
    e.preventDefault();

    setOutputType(e.target.value);
  }

  const changeTax = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setTax(e.target.value);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            급여계산기
          </Card.Title>
          <Form onSubmit={submit}>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                <Form.Select onChange={changeInputType}>
                  <option value={'시급'}>시급</option>
                  <option value={'일급'}>일급</option>                  
                  <option value={'주급'}>주급</option>
                  <option value={'월급'}>월급</option>
                  <option value={'연봉'}>연봉</option>
                </Form.Select>
              </Form.Label>
              <Col sm="9">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="9120"
                    type='number'
                    defaultValue={9120}
                  />
                  <InputGroup.Text>원</InputGroup.Text>
                </InputGroup>                
              </Col>
              <Col sm="auto">을</Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                <Form.Select onChange={changeOutputType}>
                  <option value={'일급'}>일급</option>                  
                  <option value={'주급'}>주급</option>
                  <option value={'월급'}>월급</option>
                  <option value={'연봉'}>연봉</option>
                </Form.Select>
              </Form.Label>
              <Col sm="auto">
                으로 환산
              </Col>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                일일 근무시간
              </Form.Label>
              <Col sm="10">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="1"
                    type='text'
                    defaultValue={1}
                  />
                  <InputGroup.Text>시간</InputGroup.Text>
                </InputGroup>  
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                주휴수당
              </Form.Label>
              <Col sm="10">
                <Form.Check 
                  type="switch"
                  onChange={() => setHollydayAllowance(hollydayAllowance === 0.9 ? 1 : 0.9)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                세금
              </Form.Label>
              <Col sm="10" onChange={changeTax}>
                <Form.Check 
                  type="radio"
                  value="미적용"
                />
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
