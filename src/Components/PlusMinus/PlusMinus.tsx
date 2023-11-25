import { FC } from 'react';
import './PlusMinus.scss';

type PlusMinusProps = {
  onClickMinus: any;
  onClickPlus: any;
};

export const PlusMinus = (props: PlusMinusProps): any => {
  return (
    <div className='plusMinus_container'>
      <button className='btn_minus pm_btn' onClick={props.onClickMinus}>
        <svg
          width='31'
          height='31'
          viewBox='0 0 31 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='15.5' cy='15.5' r='15' stroke='#28CA6C' />
          <path
            d='M21.4663 16.5001V15.0001H10.4663V16.5001H21.4663Z'
            fill='#28CA6C'
          />
        </svg>
      </button>
      <button className='btn_plus pm_btn' onClick={props.onClickPlus}>
        <svg
          width='31'
          height='31'
          viewBox='0 0 31 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='- hover'>
            <circle
              id='Ellipse 3.6'
              cx='15.5'
              cy='15.5'
              r='15'
              stroke='#28CA6C'
            />
            <path
              id='+'
              d='M14.6988 14.7082H10V16.292H14.6988V21.0001H16.2795V16.292H21V14.7082H16.2795V10.0001H14.6988V14.7082Z'
              fill='#28CA6C'
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default PlusMinus;
