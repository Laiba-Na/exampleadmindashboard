import {Box , useTheme , Typography} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Header from '../../Components/Header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {tokens} from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">

            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header" >

                <Typography color={colors.Primary[100]} variant="h5">
                    An Important Question
                </Typography>
                
                </AccordionSummary>

                <AccordionDetails defaultExpanded>
                    <Typography color={colors.Secondary[500]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio saepe magni aliquam, velit, dolor magnam animi laboriosam illum similique pariatur consequuntur earum sint quos dicta, vitae veritatis. Velit, magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">

                <Typography color={colors.Primary[100]} variant="h5">
                    Another Important Question
                </Typography>
                
                </AccordionSummary>

                <AccordionDetails defaultExpanded>
                    <Typography color={colors.Secondary[500]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio saepe magni aliquam, velit, dolor magnam animi laboriosam illum similique pariatur consequuntur earum sint quos dicta, vitae veritatis. Velit, magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">

                <Typography color={colors.Primary[100]} variant="h5">
                    This is yet Again Important Question
                </Typography>
                
                </AccordionSummary>

                <AccordionDetails defaultExpanded>
                    <Typography color={colors.Secondary[500]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio saepe magni aliquam, velit, dolor magnam animi laboriosam illum similique pariatur consequuntur earum sint quos dicta, vitae veritatis. Velit, magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">

                <Typography color={colors.Primary[100]} variant="h5">
                    An Question Again
                </Typography>
                
                </AccordionSummary>

                <AccordionDetails defaultExpanded>
                    <Typography color={colors.Secondary[500]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio saepe magni aliquam, velit, dolor magnam animi laboriosam illum similique pariatur consequuntur earum sint quos dicta, vitae veritatis. Velit, magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">

                <Typography color={colors.Primary[100]} variant="h5">
                    Question
                </Typography>
                
                </AccordionSummary>

                <AccordionDetails defaultExpanded>
                    <Typography color={colors.Secondary[500]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio saepe magni aliquam, velit, dolor magnam animi laboriosam illum similique pariatur consequuntur earum sint quos dicta, vitae veritatis. Velit, magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}


export default FAQ;