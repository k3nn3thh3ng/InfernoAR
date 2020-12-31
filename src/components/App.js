import React from 'react';
import { Grid, Box, Paper } from '@material-ui/core/';

import Countdowntimer from './Countdowntimer';
import Topbanner from './Topbanner';
import Image from '../img/main.jpg'; 

function App() {
	const styles = {
    	paperContainer: {
        	backgroundImage: `url(${Image})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
			minHeight: 680,
			backgroundPosition: 'center',
			borderTop: '5px solid purple',
			borderBottom: '5px solid purple',
			color: 'white',
    	}
	};
	
  return (
	<Box>		
		<Topbanner />
		<Paper style={styles.paperContainer}>
			<Grid container justify='center' style={{marginTop: '340px'}}>
					<Countdowntimer />
			</Grid>
		</Paper>
	</Box>
  );
}

export default App

