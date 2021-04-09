/* eslint-disable */
/* eslint-disable */
import { AddBox, Dashboard, Notifications, Search } from '@material-ui/icons';
import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Group>
                <Footer.Left>
                    <Footer.Link href="#"><Search /></Footer.Link>
                    <Footer.Link href="#"><Dashboard /></Footer.Link>
                    <Footer.Link href="#"><Notifications /> 1 </Footer.Link>
                </Footer.Left>
                <Footer.Right>
                    <Footer.Link href="#"><AddBox /></Footer.Link>
                </Footer.Right>
            </Footer.Group>
        </Footer>
    );
}

