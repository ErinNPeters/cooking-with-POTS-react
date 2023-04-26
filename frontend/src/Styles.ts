import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const gray1 = '#383737';
export const gray2 = '#5c5a5a';
export const gray3 = '#857c81';
export const gray4 = '#b9b9b9';
export const gray5 = '#e3e2e2';
export const gray6 = '#f7f8fa';

export const primary1 = '#681c41';
export const primary2 = '#824c67';

export const accent1 = '#dbb365';
export const accent2 = '#efd197';
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sans-serif";
export const fontSize = '16px';

export const PrimaryButton = styled.button`
  margin: 10px 10px 5px 250px;
  background-color: ${primary2};
  border-color: ${primary2};
  border-style: solid;
  border-radius: 5px;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${primary1};
  }
  :focus {
    outline-color: ${primary2};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Fieldset = styled.fieldset`
  margin: 10px auto 0 auto;
  padding: 30px;
  width: 350px;
  background-color: ${gray6};
  border-radius: 4px;
  border: 1px solid ${gray5};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const FieldLabel = styled.label`
  font-weight: bold;
`;

export const HeaderBox = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid ${gray5};
  box-shadow: 0 3px 7px 0 rgba (100, 112, 114, 0.21);
`;

export const baseFieldCSS = css`
  box-sizing: border-box;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  margin-bottom: 5px;
  padding: 8px 10px;
  border: 1px solid ${gray5};
  border-radius: 3px;
  color: ${gray2};
  background-color: white;
  :focus {
    outline-color: ${gray5};
  }
  :disabled {
    background-color: ${gray6};
  }
`;

export const FieldInput = styled.input`
  ${baseFieldCSS}
  width: 100%
`;

export const FieldSearch = styled.input`
  ${baseFieldCSS}
  width: 200px;
`;

export const FieldTextArea = styled.textarea`
  ${baseFieldCSS}
  width: 100%;
  height: 100px;
`;

export const FieldError = styled.div`
  font-size: 12px;
  color: red;
`;

export const FormButtonContainer = styled.div`
  margin: 30px 0px 0px 0px;
  padding: 20px 0px 0px 0px;
  border-top: 1px solid ${gray5};
`;

export const SubmissionSuccess = styled.div`
  margin-top: 10px;
  color: green;
`;
export const SubmissionFailure = styled.div`
  margin-top: 10px;
  color: red;
`;

export const PageTitle = styled.h2`
  /* font-size: 15px; */
  font-weight: bold;
  margin: 10px 0px 5px;
  text-align: center;
  text-transform: uppercase;
`;

export const PageSubTitle = styled.h4`
  /* font-size: 15px; */
  font-weight: bold;
  margin: 10px 0px 5px;
  text-align: center;
`;

export const AppFonts = styled.div`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  background-color: ${gray6};
`;
