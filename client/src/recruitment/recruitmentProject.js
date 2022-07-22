import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, TableCell, TableRow } from '@mui/material';

const RecruitmentProject = ({ projects }) => {
  let navigate = useNavigate();
  return projects.map((project, i) => {
    return (
      <CustomizedTableRow
        key={i}
        onClick={() => {
          navigate(`/recruitmentDetail/${project._id}`);
        }}
      >
        <CustomizedTableCell component="th" scope="row" align="center">
          {i + 1}
        </CustomizedTableCell>
        <CustomizedTableCell align="center">
          {project.nickName}
        </CustomizedTableCell>
        <CustomizedTableCell align="center">
          {project.title}
        </CustomizedTableCell>
        <CustomizedTableCell align="center">
          {new Date(project.createdAt).toLocaleString()}
        </CustomizedTableCell>
      </CustomizedTableRow>
    );
  });
};

const CustomizedTableRow = styled(TableRow)`
  :hover {
    background: gray;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const CustomizedTableCell = styled(TableCell)`
  :hover {
    color: white;
    //transition: 0.3s ease-in-out;
  }
`;

export default RecruitmentProject;
