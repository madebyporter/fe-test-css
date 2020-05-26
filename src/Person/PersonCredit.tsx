/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { Credit } from '../App';
import { COLORS } from '../colors';
import { BP } from '../breakpoints';

type Props = {
  className?: string;
  creditData: Credit;
}

const PersonCredit: React.FC<Props> = props => {
  const { className = '', creditData } = props;
  const theme = useTheme();


  const style = css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 ${theme.spacing(2)}px 0;
    padding: 0 0 ${theme.spacing(2)}px 0;
    width: 100%;
    justify-content: space-between;

    &:last-of-type {
      margin-bottom: 0;
    }

    & > * {
      width: 100%;
      @media only screen and (min-width: ${BP.TABLET}) {
        width: 50%;
      }
    }

    .PersonCredit-left {
      margin: 0 0 ${theme.spacing(1)}px 0;
    }

    .PersonCredit-right {
      text-align: left;
      @media only screen and (min-width: ${BP.TABLET}) {
        text-align: right;
      }
    }

    .credit-top {
      &-left {
        font-weight: 800;
        width: 100%;
      }

      &-right {
        font-weight: normal;
      }
    }

    .credit-bottom {
      &-left {
        font-weight: 400;
        color: gray;
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${COLORS.BORDER_COLOR};
    }

  `;

  return (
    <div className={cn(className, 'PersonCredit')} css={style}>
      <div className="PersonCredit-left">
        <Typography className="credit-top credit-top-left" variant="body1">
          {creditData.position}
        </Typography>
        <Typography className="credit-bottom credit-bottom-left" variant="body1">
          {creditData.productionType}
        </Typography>
      </div>
      <div className="PersonCredit-right">
        <Typography className="credit-top credit-top-right" variant="body1">
          {creditData.productionTitle}
        </Typography>
        <Typography className="credit-bottom credit-bottom-right" variant="body1">
          {creditData.year}
        </Typography>
      </div>
    </div>
  );
};

export default PersonCredit;