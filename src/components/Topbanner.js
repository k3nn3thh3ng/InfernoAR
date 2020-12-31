import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
	height: '150px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
	marginLeft: theme.spacing(2),
  },
  addlogo: {
	flexGrow: 0.05,
	padding: theme.spacing(1),
  }
}));

export default function Topbanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#ff5722', color: 'black'}}>
        <Toolbar>
			<ControlPointSharpIcon className={classes.addlogo}/>
			<ControlPointSharpIcon className={classes.addlogo}/>
			<Typography variant="h6" className={classes.title}>
				Thank You
			</Typography>
			<Button color="inherit">
				Login
			</Button>
			<IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}