import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
    title: string;
    content: string;
    expanded: boolean;
    onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}


function AccordionUsage({ title, content, expanded, onChange }: AccordionProps) {
    return (
        <div className='py-2'>
            <Accordion
                expanded={expanded}
                onChange={onChange}
                sx={{
                    backgroundColor: "#EBF5FF",
                    boxShadow: 'inset 0px 4px 25.1px rgba(128, 176, 226, 0.5)',
                    borderRadius: '12px',
                    padding: '8px',
                    border: '1px solid #E6700B33',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                    sx={{
                        backgroundColor: "transparent",
                        borderRadius: '12px',
                    }}
                >
                    <Typography component="span" className="text-base md:text-lg font-medium">
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderRadius: '12px', backgroundColor: "transparent" }}>
                    <Typography className='text-[#222E48]/70 text-sm md:text-base'>
                        {content}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


export default AccordionUsage;