// @ts-nocheck
import React, { useState, useEffect } from "react";
import { app } from "../Firebase/Config.js";
import { getDatabase, ref, onValue } from "firebase/database";
import Card from 'react-bootstrap/Card';
import ReadRecords from "../Firebase/ReadRecords.js";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DeleteRecord } from "../Firebase/ReadRecords.js";
import Nav from 'react-bootstrap/Nav';
import {editScoreCard} from "../Firebase/WriteNewScoreCard.js";
import Navbar from './Navbar'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux'
import { setUserUID } from '../store/userSlice'

const ShowRecords = () => {
    let count = 0
    const [records, setRecords] = useState()
    const [recordsArray, pushRecords] = useState([])
    const [editRecord, setEditRecord] = useState({ "edit": false, "object": {} })
    const [courseName, setCourseName] = useState('')
    const [players, setPlayers] = useState('')
    const [date, setDate] = useState('')
    const [holes, setHoles] = useState('')
    const [par, setPar] = useState('')
    const [stroke, setStroke] = useState('')
    const [holeNumber, setHoleNumber] = useState('')
    const [holeYardage, setHoleYardage] = useState('')
    const userId = useSelector((state) => state.user.value)
    console.log('this sucks!!!!!!!!!!!! ', useSelector((state) => state.user.value))
    const handlePress = () => {
        console.log('this broke')
        ReadRecords(userId).then((data => {
            console.log('this sucks even extra ', data)

            setRecords(prev => ({ ...prev, ...data }))
        }))
    }
    useEffect(() => {
        console.log('this sucks ', records)
        if (typeof records == 'object') {
            Object.keys(records).forEach((scorecard, index) => {
                pushRecords(current => [...current, { 'key': scorecard, 'courseName': Object.values(records[scorecard])[0].courseName, 'date': Object.values(records[scorecard])[0].date, 'holeNumber': Object.values(records[scorecard])[0].holeNumber, 'holeYardage': Object.values(records[scorecard])[0].holeYardage, 'holes': Object.values(records[scorecard])[0].holes, "par": Object.values(records[scorecard])[0].par, 'players': Object.values(records[scorecard])[0].players, 'stroke':  Object.values(records[scorecard])[0].stroke}]);
                console.log('ayooo im in here', scorecard)
            })
        }
    }, [records])


    const saveHandler = (obj) => {
        console.log('obj ',obj)
        console.log("PLAYERS ", players)
        console.log("PAR ", par.split(','))
        console.log("holeYardage ", holeYardage.split(','))
        const ScoreCard = {
            courseName: obj.courseName,
            players: players != "" ? players.split(','): obj.players,
            date: date != "" ? date : obj.date,
            holes: holes != "" ? holes : obj.holes,
            par: par != "" ? par.split(','): obj.par,
            stroke: stroke != "" ? stroke.split(','):obj.stroke,
            holeYardage: holeYardage != "" ? holeYardage.split(','): obj.holeYardage
          }
          console.log('NEWSCORECARD: ', ScoreCard)
      
        editScoreCard(ScoreCard, obj.key)
        setEditRecord({ "edit": false, "object": {} })
    }

    const handleDelete = (key) => {

        DeleteRecord(key,userId)
        console.log('hey')
        setEditRecord({ "edit": false, "object": {} })
    }

    document.body.style = 'background: white;';

    let i

    if (editRecord.edit == true) {
        console.log('edit ', editRecord.object.courseName)
        return (
            <div>
                <Navbar/>
            <Container fluid="xl" style={{ backgroundColor: 'grey', 'flex': 1 }}>
                
                <Row className="justify-content-md-center" style={{ 'margin': 10, 'width': '100%', 'height': '100%' }}>
                    <Col >
                        <Card style={{ 'width': '100%', 'backgroundColor': 'pink' }}>
                            <Card.Body style={{ 'backgroundColor': 'white', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                <Card.Title style={{ 'backgroundColor': 'white' }}>Score Card</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{ 'backgroundColor': 'white' }}>Course: {editRecord.object.courseName}</Card.Subtitle>
                                <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', 'width': '100%' }}>

                                    <button style={{}} onClick={() => saveHandler(editRecord.object)} >Save</button>

                                    <Card.Text style={{ 'backgroundColor': 'white', width: '50%' }}>
                                        <label>Date:
                                            <input type="text" onChange={(e) => setDate(e.target.value)} placeholder={editRecord.object.date} />
                                        </label>
                                        <br />
                                        <label>Hole Yardages:
                                            <input type="text" onChange={(e) => setHoleYardage(e.target.value)} placeholder={editRecord.object.holeYardage.join(', ')} />
                                        </label>
                                        <br />
                                        <label>Number of Holes:
                                            <input type="text" onChange={(e) => setHoles(e.target.value)} placeholder={editRecord.object.holes} />
                                        </label>
                                        <br />

                                        <label>Pars:
                                            <input type="text" onChange={(e) => setPar(e.target.value)} placeholder={editRecord.object.par.join(', ')} />
                                        </label> 
                                        <br />
                                        <label>Strokes:
                                            <input type="text" onChange={(e) => setStroke(e.target.value)} placeholder={editRecord.object.stroke.join(', ')} />
                                        </label> 
                                        <br />
                                        <label>Players:
                                            <input type="text" onChange={(e) => setPlayers(e.target.value)} placeholder={editRecord.object.players.join(', ')} />
                                        </label> 
                                    
                                    </Card.Text>
                                    <button onClick={() => handleDelete(editRecord.object.key)}>Delete</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    } else {

        return (
            <>

            <style type='text/css'>
              {`
              .btn-primary{
                color:white;
                margin:10px;
                align-items: center;
                justify-content: centers;
              }
            `}
            </style>
            <div>
                <Navbar/>
            <Container fluid="xl" style={{ backgroundColor: 'white', 'flex': 1 }}>
                <Button onClick={() => handlePress()}>Load Records</Button>
                <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Score Card #</th>
                                    <th>Course Name</th>
                                    <th>Players</th>
                                    <th>Date</th>
                                    <th>Number of Holes</th>
                                    <th>Hole YardAges</th>
                                    <th>Pars</th>
                                    <th>Strokes</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                {console.log('records !!!!', typeof recordsArray)}
                {typeof recordsArray == 'object' ? recordsArray.map((r, index) => {
                    console.log('scorecard ', r);
                    return (
                         
                         <tr>
                            <td>{index+1}</td>
                            <td>{r.courseName}</td>
                            <td>{r.players.join(', ')}</td>
                            <td>{r.date}</td>
                            <td>{r.holes}</td>
                            <td>{r.holeYardage.join(', ')}</td>
                            <td>{r.par.join(', ')}</td>
                            <td>{r.stroke.join(', ')}</td>
                            <td>{<Button variant="success" onClick={() => handleDelete(r.key)}>X</Button>}</td>
                            <td>{<Button variant="success" onClick={() => setEditRecord({ "edit": true, "object": r })} >E</Button>}</td>
                            {/* <td>{r.stroke.join(', ')}</td> */}
                        </tr>
                        // <Row key={index} className="justify-content-md-center" style={{ 'margin': 10, 'width': '100%', 'height': '100%' }}>
                        //     <Col >
                        //         <Card style={{ 'width': '100%', 'backgroundColor': 'pink' }}>
                        //             <Card.Body style={{ 'backgroundColor': 'white', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                        //                 <Card.Title style={{ 'backgroundColor': 'white', 'border-bottom': '4px solid black'}}>Score Card</Card.Title>
                        //                 <Card.Subtitle className="mb-2 text-muted" style={{ 'backgroundColor': 'white', 'border-bottom': '4px solid black' }}>Course: {r.courseName}</Card.Subtitle>
                        //                 <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', 'width': '100%' }}>

                        //                     <button style={{}} onClick={() => setEditRecord({ "edit": true, "object": r })} >Edit</button>

                        //                     <Card.Text style={{ 'backgroundColor': 'white', width: '50%', 'border': '4px solid black' }}>
                        //                         Date: {r.date}
                        //                         <br />
                        //                         Hole Numbers: {r.holeNumber.join(', ')}
                        //                         <br />
                        //                         Hole Yardages: {r.holeYardage.join(', ')}
                        //                         <br />
                        //                         Number of Holes: {r.holes}
                        //                         <br />
                        //                         Pars: {r.par.join(', ')}
                        //                         <br />
                        //                         Players: {r.players.join(', ')}
                        //                     </Card.Text>
                        //                     <button onClick={() => handleDelete(r.key)}>Delete</button>
                        //                 </div>
                        //             </Card.Body>
                        //         </Card>
                        //     </Col>
                        // </Row>

                    )
                    
                }) : <h1>No data to show</h1>
                }
                </tbody>
                </Table>
            </Container>
            </div>
            </>
        )
    }
}
export default ShowRecords


