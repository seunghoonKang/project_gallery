import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, styled } from '@mui/material';
import ExhReview from './exhReview';

const WhiteTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'white',
  },
});

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function onClickHandler() {}

export default function ExhibitionTap({ exhibitionProject }) {
  console.log(exhibitionProject.description);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="displayTapBox">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div>
          <WhiteTabs
            textColor="inherit"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="taps"
              onClick={onClickHandler}
              indicatorColor="white"
              label={<span style={{ color: 'white' }}>프로젝트 설명</span>}
              {...a11yProps(0)}
            />
            <Tab
              label={<span style={{ color: 'white' }}>사용후기 및 질문</span>}
              {...a11yProps(1)}
            />
          </WhiteTabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        {exhibitionProject.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExhReview exhibitionProject={exhibitionProject} />
      </TabPanel>
    </Box>
  );
}
