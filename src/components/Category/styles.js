import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const placeholder = keyframes`
  from {
      background-position: 0% 0%;
  }
  to {
    background-position: -135% 0%;
  }
`;

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    align-items: center;
    width: 75px;
`;

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`;

export const ImagePlaceholder = styled.div`
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    height: 75px;
    width: 75px;
    background: linear-gradient(-90deg, #E0E0E0 0%, #F8F8F8 50%, #E0E0E0 100%);
    background-size: 400% 400%;
    animation: ${placeholder} 1.2s ease-in-out infinite;
`;

export const EmogiPlaceholder = styled.div`
  height: 18px;
  width: 40px;
  margin-top: 8px;
  background: linear-gradient(-90deg, #E0E0E0 0%, #F8F8F8 50%, #E0E0E0 100%);
  background-size: 400% 400%;
  animation: ${placeholder} 1.2s ease-in-out infinite;
`;
