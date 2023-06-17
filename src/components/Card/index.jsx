import React from "react";
import { CardDescription, CardImage, CardTitle, CardWrapper } from './styles'

const Card = ({ item }) => {
    const images = item?.media[0];
    let firstMedia = null;

    if (images && 'media-metadata' in images) {
        firstMedia = images['media-metadata'][2];
    }
    return (
        <CardWrapper key={item.id}>
            <CardImage src={firstMedia?.url ? firstMedia?.url : "https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"}  alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.abstract}</CardDescription>
        </CardWrapper>
    )
}

export default Card