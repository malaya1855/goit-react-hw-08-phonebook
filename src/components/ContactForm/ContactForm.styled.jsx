import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: stretch;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%),
    0 1px 3px 0 rgb(93 100 148 / 20%);
  transition: all 0.2s ease-out;
  background-image: linear-gradient(180deg, #fff, #f5f5fa);
  :focus {
    box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%),
      0 4px 6px 0 rgb(93 100 148 / 20%);
  }
  :focus-visible {
    outline: none;
  }
  ::placeholder {
    color: rgb(72, 76, 122);
  }
`;
export const Subtitle = styled.h2`
  text-align: center;
  font-size: 22px;
  color: rgb(72, 76, 122);
`;
