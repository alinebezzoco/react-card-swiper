import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div` 
    background-color: yellow;
    width: ${props => props.width || "320px"};
    height: 400px;

    p { 
    font-size: 12px; 
    color: red; 
    text-align: center;
    }
`;

const CardHeader = styled.div`
    h1 { 
        color: purple;
    }
`; 

const CardContent = styled.div` 
    p { 
        color: red;       
    }
`;

const CardFooter = styled.div` 
    p { 
        color: red;
    }
`;

const CardButton = styled.a` 
    width: 100%; 
    height: 30px; 
    color: green; 
    background: red;
`;
 
export default class Cards extends Component {
 
    render() {
        return (
            <Card width={this.props.width}>
                <CardHeader>
                    <h1>{this.props.title}</h1>
                </CardHeader>
                <CardContent>
                    <p>{this.props.description}</p>
                </CardContent>
                <CardFooter>
                    <p>{this.props.footer}</p>
                    <CardButton href={this.props.linkUrl}>
                        {this.props.callToAction}
                    </CardButton>
                </CardFooter>
            </Card>
        );
    }
}
