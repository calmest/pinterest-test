/* eslint-disable */
import React from 'react';
import { Container, Frame, Left, Right, FarRight, Group, Link } from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Header.Left = function HeaderLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>;
}

Header.Right = function HeaderRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>;
}

Header.FarRight = function HeaderFarRight({ children, ...restProps }) {
    return <FarRight {...restProps}>{children}</FarRight>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}
