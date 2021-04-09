/* eslint-disable */
import React from 'react';
import { Header } from '../components';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { ChevronLeft, FilterList, MoreHoriz, OpenInBrowser, PersonAdd } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export function HeaderContainer() {
    const classes = useStyles();

    return (
        <Header>
            <Header.Frame>
                <Header.Left>
                    <Header.Link>
                        <ChevronLeft />
                    </Header.Link>
                </Header.Left>
                <Header.Right>
                    <Header.Link>
                        <FilterList />
                    </Header.Link>
                    <Header.Link>
                        <Avatar src="https://avatars.githubusercontent.com/u/22841?s=64&v=4" alt="" className={classes.small} />
                    </Header.Link>
                    <Header.Link>
                        <Avatar src="https://avatars.githubusercontent.com/u/83255?s=64&v=4" alt="" className={classes.small} />
                    </Header.Link>
                    <Header.Link>
                        <Avatar src="https://avatars.githubusercontent.com/u/142658?s=64&v=4" alt="" className={classes.small} />
                    </Header.Link>
                    <Header.Link>
                        <PersonAdd />
                    </Header.Link>
                </Header.Right>
                <Header.FarRight>
                    <Header.Link>
                        <OpenInBrowser />
                    </Header.Link>
                    <Header.Link>
                        <MoreHoriz />
                    </Header.Link>
                </Header.FarRight>
            </Header.Frame>
        </Header>
    )
}

