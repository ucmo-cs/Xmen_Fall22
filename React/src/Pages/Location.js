import React, { useState } from 'react';
import SearchBox from "../Components/SearchBox";
import Button from "react-bootstrap/Button";
import map from "../Photos/Picture2.png";
import Card from 'react-bootstrap/Card';

function Location(){

    const [searchField, setSearch] = useState("");

    return (
        <div className="location">
            <h2 className="location-header">Please pick one of our locations</h2>
            <div className="location-search">
                <SearchBox placeholder="Search Location" handleChange={(e) => setSearch({searchField:e.target.value})}/>
                <Button className="search-button" variant="primary">Search</Button>
            </div>
            <img className="location-map" src={map} alt="map"/>
            <div className="location-pick">
                <Card
                    bg="light"
                    border="success"
                    style={{ width: '13.5rem', height:"250px"}}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title> Summer Set Dr Warrensburg, MO 64093 </Card.Title>
                        <Card.Text>
                            <p> {' '} </p>

                            <small className="appointments-text"> available appointments next week </small>

                        </Card.Text>
                        <Card.Footer>
                            <p> {' '} </p>
                            <Button className="button-select-location" variant="primary">Select Location</Button>
                        </Card.Footer>

                    </Card.Body>
                </Card>
                <Card
                    bg="light"
                    border="success"
                    style={{ width: '13.5rem', height:"250px", marginLeft:"20px"}}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title> 505 Tractors pass Centerview, MO 64093 </Card.Title>
                        <Card.Text>
                            <p> {' '} </p>

                            <small className="appointments-text"> available appointments next week </small>

                        </Card.Text>
                        <Card.Footer>
                            <p> {' '} </p>
                            <Button className="button-select-location" variant="primary">Select Location</Button>
                        </Card.Footer>

                    </Card.Body>
                </Card>

            </div>
        </div>

    );
}

export default Location;