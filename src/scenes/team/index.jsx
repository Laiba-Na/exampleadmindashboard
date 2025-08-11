import {Box, Typography , useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {mockDataTeam} from '../../data/mock';
import {tokens} from '../../theme';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityIcon from '@mui/icons-material/Security';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Header from '../../Components/Header'


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name" , flex: 1, cellClassName: "name-column--cell"},
        {field:'age' , headerName: "Age" , type: 'number', headerAlign: 'left', align: 'left'},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        { field: "access", headerName: "Access Level", flex: 1, 

            renderCell:({row:{access}})=>{

            return(
                <Box
                    
                    width={'60%'}
                    m = '0 auto'
                    p= '5px'
                    display='flex'
                    justifyContent='center'
                    backgroundColor={
                        access === 'admin' ? colors.Secondary[700] : 
                        access === 'manager'? colors.Secondary[500] :
                        colors.Secondary[400]
                    }
                    borderRadius='4px'
                >
                    {access === 'admin' && <AdminPanelSettingsIcon sx={{color :'#f5f9f3'}} />}
                    {access === 'manager' && <SecurityIcon sx={{ color :'#f5f9f3'}} />}
                    {access === 'user' && <LockOpenIcon sx={{ color :'#f5f9f3'}} />}
                    <Typography color={'#f5f9f3'} sx={{ml: '5px'}}>
                        {access}
                    </Typography>


                </Box>
            )

        }}

    ]
    
    return(
        <Box m={'10px 20px'}>
            <Header title="Team" subtitle = 'Managing the Team Members' />
            <Box
                m='10px 0 0 0'
                sx={{
                    
                    ".& .MuiDataGrid-cell": {
                        borderBottom: 'none',
                    },
                    "& .name-column--cell": {
                        color: colors.Secondary[500],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        borderBottom: 'none',
                        backgroundColor: colors.Secondary[600],
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.Secondary[900],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: 'none',
                        backgroundColor: colors.Secondary[600],
                    },
                }}
               
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                >

                </DataGrid>
            </Box>
        </Box>

    )

}

export default Team;