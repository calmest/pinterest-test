/* eslint-disable */
import React from 'react';
import { Container, Group, Top, Bottom, Right, Left, Text, Title, SubTitle, Image } from './styles/card';

export default function Card({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Card.Top = function CardTop({ children, ...restProps }) {
    return <Top {...restProps}>{children}</Top>;
}

Card.Bottom = function CardBottom({ children, ...restProps }) {
    return <Bottom {...restProps}>{children}</Bottom>;
}

Card.Right = function CardRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>;
}

Card.Left = function CardRight({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>;
}

Card.Text = function CardRight({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}