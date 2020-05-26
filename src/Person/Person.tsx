/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import { useTheme } from '@material-ui/core/styles';

import PersonCard from './PersonCard';
import { Account } from '../App';
import PersonDetails from './PersonDetails';
import { COLORS } from '../colors';
import { BP } from '../breakpoints';

type Props = {
  className?: string;
  accountData: Account;
};

const Person: React.FC<Props> = props => {
  const { className = '', accountData } = props;
  const theme = useTheme();
  const style = css`
    border: 2px solid ${COLORS.BORDER_COLOR};
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    @media only screen and (min-width: ${BP.TABLET}) {
      flex-wrap: nowrap;
    }
    
    .Person {
      width: 100%;
      @media only screen and (min-width: ${BP.TABLET}) {
        width: 850px; 
      }
    }

    .PersonCard-container {
      width: 100%;
      height: 100%;
      @media only screen and (min-width: ${BP.TABLET}) {
        width: 300px; 
      }
    }

    .PersonDetails-container {
      border-top: 2px solid ${COLORS.BORDER_COLOR};
      padding: ${theme.spacing(2)}px;
      width: 500px;
      
      @media only screen and (min-width: ${BP.TABLET}) {
        border-top: 0;
        border-left: 2px solid ${COLORS.BORDER_COLOR};
      }
    }
  `;

  return (
    <div className={cn(className, 'Person')} css={style}>
      <div className="PersonCard-container">
        <PersonCard accountData={accountData} />
      </div>
      <div className="PersonDetails-container">
        <PersonDetails accountData={accountData} />
      </div>
    </div>
  )
};

export default Person;
