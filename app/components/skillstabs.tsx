"use client"
import * as React from 'react';
import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import SkillsCard from './skillsCard';


function CustomTabPanel(props: {children?: React.ReactNode; index: number; value: number}){
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel"
            hidden={value !== index}
            {...other}
            id={`tabpanel_skills_${index}`}
            >
                {value === index &&  <div className="mt-10 h-50 flex flex-col gap-10 flex-wrap justify-around lg:flex-row">{children}</div>}
        </div>

    )
}
export default function SkillsTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newvalue: number) => {
        setValue(newvalue);
    }
    return (
    <Box>
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Programming Languages" />
            <Tab label="Frameworks & Libraries" />
            <Tab label="Other Tools" />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
            <SkillsCard skill="Javascript"/>
            <SkillsCard skill="React" />
            <SkillsCard skill="Python" />
            <SkillsCard skill="C++" />
            <SkillsCard skill="PostgresSQL" />
            <SkillsCard skill="Typescript" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <SkillsCard skill="Express.js"/>
            <SkillsCard skill="Next.js" />
            <SkillsCard skill="React" />
            <SkillsCard skill="React Native" />
            <SkillsCard skill="Tailwind" />
            <SkillsCard skill="Flask" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <SkillsCard skill="AWS"/>
            <SkillsCard skill="Google Datastore" />
            <SkillsCard skill="OpenAI API" />
        </CustomTabPanel>
    </Box> );
}