import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import { Images, CardContainer } from './style'

export default function CardComponent(props) {
    const {image, title, meta, description, released, director, redirect, id} = props;
    return (
        <CardContainer>
            <Card onClick={redirect} id={id}>
                <Images><Image src={image} wrapped ui={false}/></Images>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{meta}</Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Icon name='user' /> {director}
                </Card.Content>
                <Card.Content extra>
                <Icon name='calendar alternate outline' /> {released}
                </Card.Content>
            </Card>
        </CardContainer>
    )
}
