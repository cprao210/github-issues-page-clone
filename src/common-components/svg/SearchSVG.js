import React from 'react';
import styled from 'styled-components';
import CommonSVGStyle from './CommonSVGStyle';

const SubNavSearchIcon = styled(CommonSVGStyle)`
    color: #c6cbd1;
    display: block;
    left: 8px;
    pointer-events: none;
    position: absolute;
    text-align: center;
    top: 9px;
`;

const SearchSVG = () => (
  <SubNavSearchIcon width="16" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M15.7 13.3l-3.81-3.83A5.93
    5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6
    6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25
    0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59
    0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7
    0 2.59-2.11 4.7-4.7 4.7z"
    />
  </SubNavSearchIcon>
);

export default SearchSVG;
