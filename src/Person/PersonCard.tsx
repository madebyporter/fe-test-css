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
    height: auto;
    padding: ${theme.spacing(2)}px;
    @media only screen and (min-width: ${BP.TABLET}) {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      padding: 0;
    }
    & > * {
      width: auto;
      @media only screen and (min-width: ${BP.TABLET}) {
        width: 100%;
      }
    }
    .PersonCard-Media {
      padding-right: 1rem;
      @media only screen and (min-width: ${BP.TABLET}) {
        padding-right: 0;
      }
    }
    .PersonCard-Avatar {
      border: 4px solid ${COLORS.BORDER_COLOR};
      border-radius: 100%;
      height: 100px;
      width: 100px;
      @media only screen and (min-width: ${BP.TABLET}) {
        height: 150px;
        width: 150px;
      }
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
      <div className="PersonCard-Media">
        <img
          className="PersonCard-Avatar"
          src={accountData.accountImage.url}
          alt={fullName}
        />
      </div>
      <div className="PersonCard-Data">
        <Typography className="link" variant="h6">
          {fullName}
        </Typography>
        <Typography variant="body2">
          {`${accountData.locationCity}, ${accountData.locationArea}`}
        </Typography>
      </div>
    </div>
  );

};

export default PersonCard;

