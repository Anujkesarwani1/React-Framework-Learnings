import React from 'react';
import { Container, Tabs, Tab, Box, Typography, Stack, ListItem } from "@mui/material";

import BookCard from './BookCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const LibraryPage = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container fixed sx={{ color: "#03314B" }}>
            <h1>My Library</h1>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="basic tabs example" 
                    sx={{ textColor: 'secondary' }}>
                        <Tab label="Currently reading" {...a11yProps(0)} />
                        <Tab label="Finished" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                <Stack direction="row" spacing='2'>
                    <ListItem><BookCard/></ListItem>
                    <ListItem><BookCard/></ListItem>
                    <ListItem><BookCard/></ListItem>
                </Stack>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack direction='row' >
                        <ListItem><BookCard/></ListItem>
                        <ListItem><BookCard/></ListItem>
                    </Stack>
                </TabPanel>
            </Box>
        </Container>
    );
};

export default LibraryPage;

