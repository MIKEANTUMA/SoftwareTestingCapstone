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
    const [holeNumber, setHoleNumber] = useState('')
    const [holeYardage, setHoleYardage] = useState('')

    const handlePress = () => {
        console.log('this broke')
        ReadRecords().then((data => {
            console.log('this sucks even extra ', data)

            setRecords(prev => ({ ...prev, ...data }))
        }))
    }
    useEffect(() => {
        console.log('this sucks ', records)
        if (typeof records == 'object') {
            Object.keys(records).forEach((scorecard, index) => {
                pushRecords(current => [...current, { 'key': scorecard, 'courseName': Object.values(records[scorecard])[0].courseName, 'date': Object.values(records[scorecard])[0].date, 'holeNumber': Object.values(records[scorecard])[0].holeNumber, 'holeYardage': Object.values(records[scorecard])[0].holeYardage, 'holes': Object.values(records[scorecard])[0].holes, "par": Object.values(records[scorecard])[0].par, 'players': Object.values(records[scorecard])[0].players }]);
                console.log('ayooo im in here', scorecard)
            })
        }
    }, [records])


    const saveHandler = (obj) => {
        console.log('obj ',obj)
        const ScoreCard = {
            courseName: obj.courseName,
            players: obj.players,
            date: date,
            holes: holes,
            par: obj.par,
            holeNumber: obj.holeNumber,
            holeYardage: obj.holeYardage
          }
          console.log('NEWSCORECARD: ', ScoreCard)
      
        editScoreCard(ScoreCard, obj.key)
        setEditRecord({ "edit": false, "object": {} })
    }

    const handleDelete = (key) => {

        DeleteRecord(key)
        console.log('hey')
        setEditRecord({ "edit": false, "object": {} })
    }

    document.body.style = 'background: grey;';

    let i

    if (editRecord.edit == true) {
        console.log('edit ', editRecord.object.courseName)
        return (
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
                                        Hole Numbers: {editRecord.object.holeNumber.join(', ')}
                                        <br />
                                        Hole Yardages: {editRecord.object.holeYardage.join(', ')}
                                        <br />
                                        <label>Number of Holes:
                                            <input type="text" onChange={(e) => setHoles(e.target.value)} placeholder={editRecord.object.holes} />
                                        </label>
                                        <br />
                                        Pars: {editRecord.object.par.join(', ')}
                                        <br />
                                        Players: {editRecord.object.players.join(', ')}
                                    </Card.Text>
                                    <button onClick={() => handleDelete(editRecord.object.key)}>Delete</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    } else {

        return (
            <Container fluid="xl" style={{ backgroundColor: 'grey', 'flex': 1 }}>
                <Button onClick={() => handlePress()}>Load Records</Button>
                {console.log('records !!!!', typeof recordsArray)}
                {typeof recordsArray == 'object' ? recordsArray.map((r, index) => {
                    console.log('scorecard ', r);
                    return (

                        <Row key={index} className="justify-content-md-center" style={{ 'margin': 10, 'width': '100%', 'height': '100%' }}>
                            <Col >
                                <Card style={{ 'width': '100%', 'backgroundColor': 'pink' }}>
                                    <Card.Body style={{ 'backgroundColor': 'white', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                        <Card.Title style={{ 'backgroundColor': 'white' }}>Score Card</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted" style={{ 'backgroundColor': 'white' }}>Course: {r.courseName}</Card.Subtitle>
                                        <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', 'width': '100%' }}>

                                            <button style={{}} onClick={() => setEditRecord({ "edit": true, "object": r })} >Edit</button>

                                            <Card.Text style={{ 'backgroundColor': 'white', width: '50%' }}>
                                                Date: {r.date}
                                                <br />
                                                Hole Numbers: {r.holeNumber.join(', ')}
                                                <br />
                                                Hole Yardages: {r.holeYardage.join(', ')}
                                                <br />
                                                Number of Holes: {r.holes}
                                                <br />
                                                Pars: {r.par.join(', ')}
                                                <br />
                                                Players: {r.players.join(', ')}
                                            </Card.Text>
                                            <button onClick={() => handleDelete(r.key)}>Delete</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    )
                }) : <h1>No data to show</h1>
                }
            </Container>
        )
    }
}
export default ShowRecords


