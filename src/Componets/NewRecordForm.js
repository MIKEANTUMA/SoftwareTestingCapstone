import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useCallback } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../App.css";

function NewRecordForm() {
  const [numOfHoles, setNumOfHoles] = useState(0)
  const [players, setPlayers] = useState()
  const [date, setDate] = useState()
  const [courseName, setCourseName] = useState()
  const [holeInfo, setHoleInfo] = useState()
  const [par, setPar] = useState([])
  const [num , setNum] = useState([])
  const [stroke, setStroke] = useState([])
  const [yard, setYard] = useState([])

  const handleParChange = useCallback((event) =>{
    const index = parseInt(event.target.dataset.index, 10);
    setPar((p)=>{
      const newPar = [...p];
      newPar[index] = event.target.value;
      return newPar
    });
  }, []);

 

  const handleNumChange = useCallBack((event) =>{
    const index = parseInt(event.target.dataset.index, 10);
    setNum((n)=>{
      const newNum = [...n];
      newNum[index] = event.target.value;
      return newNum
    });
  }, []);

  const handleStrokeChange = useCallBack((event) =>{
    const index = parseInt(event.target.dataset.index, 10);
    setStroke((s)=>{
      const newStroke = [...s];
      newStroke[index] = event.target.value;
      return newStroke
    });
  }, []);

  const handleYardChange = useCallBack((event) =>{
    const index = parseInt(event.target.dataset.index, 10);
    setYard((y)=>{
      const newYard = [...y];
      newYard[index] = event.target.value;
      return newYard
    });
  }, []);



  const handleSubmit=(e)=>{

    console.log('par ', par)
    console.log('num ',num)
    console.log('stroke ', stroke)
    console.log('yard ', yard)
  }

  return (

    <Form >
      <div className='newRecordForm'>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Course Name</Form.Label>
        <Form.Control type="text" placeholder="Enter course name" onChange={e => setCourseName(e.target.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Players</Form.Label>
        <Form.Control type="text" placeholder="comma separated" onChange={e => setPlayers(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" placeholder="yyyy/mm/dd" onChange={e => setDate(e.target.value)}/>
      </Form.Group>
      <Button variant="success" type="button" onClick={()=> setNumOfHoles(numOfHoles +1)}>
        Add Hole
      </Button>
      </div>
        <div>
          {[...Array(numOfHoles)].map((hole, index) =>
            <div key={index} className='holeStyle'>
              <Row>
                <Col>
                  <Form.Control placeholder="Hole Number"  />
                </Col>
                <Col>
                  <Form.Control data-index={index} placeholder="Hole Par" onChange={handleParChange}/>
                </Col>
                <Col>
                  <Form.Control placeholder="strokes" />
                </Col>
                <Col>
                  <Form.Control placeholder="Hole Yardage" />
                </Col>
              </Row>
            </div>
          )}
        </div>
        <h1>{numOfHoles}</h1>


      <Button variant="primary" onClick={()=> handleSubmit()}>
        Submit
      </Button>
       
    </Form>
    
  );
}

export default NewRecordForm;