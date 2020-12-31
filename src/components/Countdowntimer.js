import React from 'react';
import Countdown from 'react-countdown';
import { Grid, Paper, Box, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

 
function Countdowntimer() {
	const useStyles = makeStyles((theme) => ({
		root: {
			justifyContent: "center",
			'& > *': {
				margin: theme.spacing(1),
				width: theme.spacing(44),
				height: theme.spacing(20),
				color: 'white',
			},
		},
	}));
	
	const classes = useStyles()
	
	const Completionist = () => <span>See you online!</span>;
	
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
	  if (completed) {
		// Render a completed state
		return <Completionist />;
	  } else {
		// Render a countdown
		return (
			<div className={classes.root}>
				<Paper elevation={2} style={{backgroundColor: '#ff5722', textAlign: 'center'}}>
					<Typography variant="h5" component="h5" >
						Keep on Rollin' 2021
					</Typography>
					<Grid container justify='center' spacing={3}>
						<Grid item>
							<Typography variant="h4" component="h4">
								{days}
							</Typography>
							<Typography variant="p" component="p">
								DAYS
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="h4" component="h4">
								{hours}
							</Typography>
							<Typography variant="p" component="p">
								HOURS
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="h4" component="h4">
								{minutes}
							</Typography>
							<Typography variant="p" component="p">
								MINUTES
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="h4" component="h4">
								{seconds}
							</Typography>
							<Typography variant="p" component="p">
								SECONDS
							</Typography>
						</Grid>
						<Typography variant="p" component="p" style={{paddingTop: '20px'}}>
							January 20 - 21, 2021
						</Typography>
					</Grid>
				</Paper>
			</div>
		)
	  }
	};
 
	return (
		<Box>
			<Grid item xs={0} sm={4}>
			
			</Grid>
			<Grid item xs={12} sm={4} alignContent='center'>
					<Countdown
						date={1611118923770}
						renderer={renderer}
					/>

			</Grid>
			<Grid item xs={0} sm={4}>
			
			</Grid>
		</Box>
		
	)
};

export default Countdowntimer


