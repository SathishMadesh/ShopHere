import React from "react";
import Axios from "axios";
import "./Products.css"
import {Card, Button, Container, Row, Col} from "react-bootstrap"

class Products extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            products:[],
        }
    }

    componentDidMount(){
        Axios.get('https://sathishmadesh.github.io/Products/products.json')
        .then((response)=>{
            this.setState({products:response.data})
        })
        .catch()
    }

    render (){
        return <div>
            <div className="prod-cont">
                {
                    this.state.products.length>0 ? 
                    <div>
                        <Container >
                            <Row className="gy-5">
                            {
                                this.state.products.map((product,index)=>{
                                    return <Col xs={6} md={4} lg={3} >
                                            <Card key={index}  className="cards h-100">
                                                <Card.Img variant="top" src={product.image}/>
                                                <Card.Body className="c-body">
                                                    <Card.Title>{product.title}</Card.Title>
                                                    <Card.Text>Price : ${product.price}</Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    
                                })
                            }
                            </Row>
                        </Container>
                    </div> : <div>No Data</div>
                }
            </div>
        </div>
     
    }
}

export default Products