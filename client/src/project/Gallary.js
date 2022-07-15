import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '@components/common/Slider';
import Loader from '@components/common/Loader';
import SideBar from './SideBar';
const GalleryContainer = styled.div `
  width: 768px;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
  } ;
`;
function Gallery() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);
    return isLoading ? (React.createElement(Loader, null)) : (React.createElement(GalleryContainer, null,
        React.createElement(SideBar, null),
        React.createElement(Slider, null)));
}
export default Gallery;