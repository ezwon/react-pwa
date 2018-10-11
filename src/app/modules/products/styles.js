import styled from "styled-components";
import AntRadioGroup from "@ant-components/RadioGroup";
import AntModal from "@ant-components/Modal";

export const RadioGroup = styled(AntRadioGroup)`
  margin: 0 0 20px !important;
`;

export const StyledGraphicsSelectorModal = styled(AntModal)`
  img {
    width: 100px;
    &.selected {
      border: 2px solid #aaa;
    }
  }
`;

export const StyledCustomFieldsWrapper = styled.div`
  .form-image-select {
    img {
      border: 1px solid #aaa;
      width: 150px !important;
    }
  }
`;
