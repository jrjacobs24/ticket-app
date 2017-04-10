import styled from 'styled-components';

const TextLeft = styled.div`
  text-align: left;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const TextRight = styled.div`
  text-align: right;
`;

TextLeft.displayName = "TextLeft";
TextCenter.displayName = "TextCenter";
TextRight.displayName = "TextRight";

export {
  TextLeft,
  TextCenter,
  TextRight
};
