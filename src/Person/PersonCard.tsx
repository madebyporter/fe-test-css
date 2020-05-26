/** @jsx jsx */
import React from 'react';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import { Account } from '../App';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { COLORS } from '../colors';
import { BP } from '../breakpoints';
type Props = {
  className?: string;
  accountData: Account;
};

const PersonCard: React.FC<Props> = props => {
  const { className = '', accountData } = props;

  const theme = useTheme();

  const style = css`
    align-items: center;
    background-color: ${COLORS.BG_COLOR};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: ${theme.spacing(2)}px 0;
    @media only screen and (min-width: ${BP.TABLET}) {
      padding: 0;
    }
    .PersonCard-Avatar {
      border: 4px solid ${COLORS.BORDER_COLOR};
      border-radius: 100%;
      height: 150px;
      width: 150px;
    }

    .link {
      color: ${COLORS.LINK_COLOR};
      transition: color .4s ease;

      &:hover {
        color: ${COLORS.LINK_SECONDARY_COLOR};
        cursor: pointer;
      }
    }
  `;

  const fullName = `${accountData.firstName} ${accountData.lastName}`;

  return (
    <div className={cn(className, 'PersonCard')} css={style}>
      <img
        className="PersonCard-Avatar"
        src={accountData.accountImage.url}
        alt={fullName}
      />
      <Typography className="link" variant="h6">
        {fullName}
      </Typography>
      <Typography variant="body2">
        {`${accountData.locationCity}, ${accountData.locationArea}`}
      </Typography>
    </div>
  );

};

export default PersonCard;

