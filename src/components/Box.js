/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import textureStripes from '../images/textureStripes.png'
import { Fragment } from "react"

const Box = ({ title, children, lines, dash, Icon, id, style, contentStyle }) => {
  return (
    <div
      id={id}
      css={[css`
        border: 1px solid #aaa;
        padding: 30px;
        ${dash && `background-image: url(${textureStripes});`}
        position: relative;
        ${!lines && "width: 100%;"}

        .bar {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          width: 10px;
          height: 25px;
          position: absolute;
          text-align: center;

          &.barTop {
            top: -13px;
            left: 50%;
            transform: rotate(90deg) translateY(50%);
          }

          &.barRight {
            top: 50%;
            right: -6px;
            transform: translateY(-50%);
          }

          &.barBottom {
            bottom: -13px;
            left: 50%;
            transform: rotate(90deg) translateY(50%);
          }

          &.barLeft {
            top: 50%;
            left: -6px;
            transform: translateY(-50%);
          }

          & .line {
            width: 100%;
            height: 1px;
            background-color: black;
            transform: rotate(45deg);
          }
        }

        .boxIcon {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 35px;
        }
     `, style]}
      className="Box"
    >
    {lines &&
      <Fragment>
      {['barLeft', 'barRight', 'barTop', 'barBottom'].map(bar => (
        <div key={bar} className={`bar ${bar}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ))}
      </Fragment>
    }
    {title &&
      <h2>{title}</h2>
    }
      <div className="boxContent" css={contentStyle}>
        {children}
      </div>
    {Icon &&
    <div className="boxIcon">
      <Icon/>
    </div>
    }
    </div>
  )
}

export default Box
