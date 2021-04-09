/* eslint-disable */
import React from 'react';
import { Container, Group, Row, Right, Left, Link, Text } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Group = function FooterGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>;
}

Footer.Right = function FooterRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>;
}

Footer.Left = function FooterLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>;
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

