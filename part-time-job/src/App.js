import React, { useState } from 'react';
import { Card, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

import './App.css';

function App() {
  const [input, setInput] = useState(9160);                           // 입력값
  const [output, setOutput] = useState(0);                            // 결과값
  const [inputType, setInputType] = useState('시급');                 // 입력값 타입
  const [outputType, setOutputType] = useState('일급');               // 결과값 타입
  const [workingHour, setWorkingHour] = useState(8);                  // 일일 근무시간
  const [workingDay, setWorkingDay] = useState(1);                    // 주당 근무일수
  const [overTime, setOverTime] = useState(0);                        // 초과 근무시간
  const [overTimeCharge, setOverTimeCharge] = useState(0);            // 초과 근무수당
  const [isHollydayAllow, setIsHollydayAllow] = useState(false);      // 주휴수당 여부
  const [hollydayAllowance, setHollydayAllowance] = useState(0);      // 주휴수당
  const [tax, setTax] = useState(1);                                  // 세금
  const [probation, setProbation] = useState(1);                      // 적용시 0.9, 미적용시 1

  // 결과값 계산
  const submit = (e) => {
    e.preventDefault();

    const weekPercent = 4.3452381;
    const calcDictionary = {
      '시급': {
        '일급': [workingHour, tax, probation],
        '주급': [workingHour, tax, probation, workingDay],
        '월급': [workingHour, tax, probation, workingDay, weekPercent],
        '연봉': [workingHour, tax, probation, workingDay, weekPercent, 12]
      },
      '일급': {
        '시급': [tax, probation, (1 / workingHour)],
        '주급': [tax, probation, workingDay],
        '월급': [tax, probation, workingDay, weekPercent],
        '연봉': [tax, probation, workingDay, weekPercent, 12]
      },
      '주급': {
        '시급': [tax, probation, (1 / workingHour), (1 / workingDay)],
        '일급': [tax, probation, (1 / workingDay)],
        '월급': [weekPercent],
        '연봉': [weekPercent, 12]
      },
      '월급': {
        '시급': [tax, probation, (1 / weekPercent), (1 / workingDay), (1 / workingHour)],
        '일급': [tax, probation, (1 / weekPercent), (1 / workingDay)],
        '주급': [tax, probation, (1 / weekPercent)],
        '연봉': [12]
      },
      '연봉': {
        '시급': [tax, probation, (1 / weekPercent), (1 / workingDay), (1 / workingHour), (1 / 12)],
        '일급': [tax, probation, (1 / weekPercent), (1 / workingDay), (1 / 12)],
        '주급': [tax, probation, (1 / weekPercent), (1 / 12)],
        '월급': [tax, probation, (1 / 12)],
      }
    }

    const calc = calcDictionary[inputType][outputType];
    const tempOutput = Math.round(calc.reduce((p, c) => p * c, input));

    setOutput(tempOutput);

    // 주휴수당 포함 안할시 주휴수당 계산 건너 뜀
    if(!isHollydayAllow){
        setHollydayAllowance(0);
        return;
    }

    // 주휴수당 계산
    if((inputType === '일급' && outputType !== '시급') || (inputType === '시급' && outputType !== '일급')){
      // (1주일 총 일한시간 / 40시간 ) x 8 x 시급  (주 최대 40시간)
      const hourlyWage = inputType === '일급' ? input / workingHour : input;
      const workingHourPerWeek = workingHour * workingDay > 40 ? 40 : workingHour * workingDay;

      // 주 15시간 안되면 주휴수당 없음
      if(workingHourPerWeek < 15) setHollydayAllowance(0);
      else setHollydayAllowance(Math.round(workingHourPerWeek / 5 * hourlyWage));
    }
  }

  const changeInputType = (e) => {
    e.preventDefault();
    const type = e.target.value;

    if(outputType === type){
      setOutputType(type === '시급' ? '일급' : '시급');
    }
    setInputType(type);
    setWorkingHour(8);
    setWorkingDay(1);
  }

  const changeInput = (e) => {
    e.preventDefault();
    console.log('changeInput', e.target.value);
    if(isNaN(+e.target.value)) console.error('유효하지 않은 숫자');
    setInput(e.target.value);
  }

  const changeOutputType = (e) => {
    e.preventDefault();

    setOutputType(e.target.value);
  }

  const changeOverTime = (e) => {
    e.preventDefault();

    const value = +e.target.value;

    if(isNaN(+e.target.value)) console.error('유효하지 않은 숫자');
    setOverTime(value);
    setOverTimeCharge(Math.round(value * input * 1.5));
  }

  const changeTax = (e) => {
    e.preventDefault();

    setTax(+e.target.value);
  }

  const changeWorkingHour = (e) => {
    e.preventDefault();
    console.log('changeWorkingHour', e.target.value);
    if(isNaN(+e.target.value)) console.error('유효하지 않은 숫자');
    setWorkingHour(+e.target.value);
  }

  const changeWorkingDay = (e) => {
    e.preventDefault();
    console.log('changeWorkingDay', e.target.value);
    if(isNaN(+e.target.value)) console.error('유효하지 않은 숫자');
    setWorkingDay(+e.target.value);
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
              <Col>
                <InputGroup>
                  <Form.Control
                    onChange={changeInput}
                    placeholder="9160"
                    type='number'
                    defaultValue={9160}
                  />
                  <InputGroup.Text>원</InputGroup.Text>
                </InputGroup>                
              </Col>
              <Col>을</Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                <Form.Select onChange={changeOutputType}>
                  {
                    ['시급', '일급', '주급', '월급', '연봉'].filter(type => type !== inputType).map(type => {
                      return (
                        <option value={type}>{type}</option>
                      )})
                  }
                </Form.Select>
              </Form.Label>
              <Col>
                으로 환산
              </Col>
            </Form.Group>

            <hr />

            {['시급', '일급'].includes(inputType) || outputType === '시급' ? <Form.Group as={Row}>
              <Form.Label column sm="2">
                일일 근무시간
              </Form.Label>
              <Col>
                <InputGroup>
                  <Form.Control
                    onChange={changeWorkingHour}
                    placeholder="8"
                    type='text'
                    defaultValue={workingHour}
                  />
                  <InputGroup.Text>시간</InputGroup.Text>
                </InputGroup>  
              </Col>
            </Form.Group> : ''}

            { (['시급', '일급'].includes(inputType) && ['주급', '월급', '연봉'].includes(outputType)) || (['시급', '일급'].includes(outputType) && ['주급', '월급', '연봉'].includes(inputType)) 
              ? <Form.Group as={Row}>
              <Form.Label column sm="2">
                일주 근무일수
              </Form.Label>
              <Col>
                <Form.Select onChange={changeWorkingDay}>
                  <option value={1}>1</option>                  
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                </Form.Select>
              </Col>
            </Form.Group> : ''}

            {inputType === '시급' && ['주급', '월급'].includes(outputType) ? <Form.Group as={Row}>
              <Form.Label column sm="2">
                {outputType[0]} 연장 근무시간
              </Form.Label>
              <Col>
                <InputGroup>
                  <Form.Control
                    onChange={changeOverTime}
                    placeholder="0"
                    type='text'
                    defaultValue={0}
                  />
                  <InputGroup.Text>시간</InputGroup.Text>
                </InputGroup>  
              </Col>
            </Form.Group> : ''}

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                주휴수당
              </Form.Label>
              <Col style={{'max-width': '40px'}}>
                <Form.Check 
                  className="switch"
                  type="switch"
                  onChange={() => setIsHollydayAllow(!isHollydayAllow)}
                />
              </Col>

              <Col>
                {isHollydayAllow ? '적용' : '미적용'}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                세금
              </Form.Label>
              <Col>
                <Form.Select onChange={changeTax}>
                  <option value={1}>미적용</option>       
                  <option value={0.967}>3.3%</option>
                  <option value={0.9068}>9.32%</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                수습
              </Form.Label>
              <Col style={{'max-width': '40px'}}>
                <Form.Check 
                  className="switch"
                  type="switch"
                  onChange={() => setProbation(probation === 0.9 ? 1 : 0.9)}
                />
              </Col>
              <Col>
                {probation === 1 ? '미적용' : '적용'}
              </Col>
            </Form.Group>
            <div className="d-grid gap-3">
              <Button type="submit" variant="outline-secondary">결과 확인</Button>
            </div>
          </Form>
          <hr/>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                예상 {outputType}
              </Form.Label>
              <Col>
                {output} 원
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                예상 주휴수당
              </Form.Label>
              <Col>
                {hollydayAllowance + ' 원'}
              </Col>
            </Form.Group>
            {inputType === '시급' && ['주급', '월급'].includes(outputType) ? <Form.Group as={Row}>
              <Form.Label column sm="2">
                예상 {outputType[0]} 연장수당
              </Form.Label>
              <Col>
                {overTimeCharge + ' 원'}
              </Col>
            </Form.Group> : ''}
            <hr />
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                최종 환산 금액
              </Form.Label>
              <Col>
                {output + hollydayAllowance + overTimeCharge} 원
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
