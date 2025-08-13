import Header from '../../Components/Header'
import {  Box } from '@mui/material'
import PieChart from '../../Components/PieChart'

const Bar = () => {

   

    return ( 
    
    <Box  m={'20px'}>

        <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
        <Box height='75vh'>

            <PieChart />

        </Box>

    </Box>
)
}


export default Bar