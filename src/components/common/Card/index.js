import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.125);
  border-radius: .25rem;
`;

const CardImg = styled.img`
  border-top-right-radius: calc(.25rem - 1px);
  border-top-left-radius: calc(.25rem - 1px);
`;

const CardTitle = styled.h4`
  margin-bottom: .75rem;
`

const CardSubtitle = styled.h6`
  margin-top: -.375rem;
  margin-bottom: 0;
`;

const CardBlock = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;

const CardLink = styled.a`
  & + & {
    margin-left: 1.25rem;
  }
`

Card.displayName = 'Card';
CardImg.displayName = 'CardImg';
CardTitle.displayName = 'CardTitle';
CardSubtitle.displayName = 'CardSubtitle';
CardBlock.displayName = 'CardBlock';
CardLink.displayName = 'CardLink';

export {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBlock,
  CardLink
};