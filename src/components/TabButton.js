import React from 'react'
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from '../styles';
//reusable button component


 const TabButton=({
    buttonTitle,
    buttonAction,
    activeButtonFlag
})=>{

    const classes = useStyles();

    return (
        <Button 
        variant="contained" 
        className={clsx(classes.button,activeButtonFlag? classes.buttonActive:'')}
        onClick={buttonAction}>
        {buttonTitle}
      </Button>
    )
}

export default TabButton;