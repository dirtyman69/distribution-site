import React, {FC} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';

const TopHeader: FC = () => {
    return (
        <AppBar position = "static">
            <Toolbar>
                <h2>タイトル</h2>
            </Toolbar>
        </AppBar>
        )
}

export default TopHeader;