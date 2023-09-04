import { FC, useEffect, useRef } from 'react';
import { FormGroup, TextField } from '@mui/material';
import './Calc.scss';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import getYear from '../getYear';
import { useOutsideClick } from '../../Hooks/useOutsideClick';

const Calc: FC = () => {
  const round = (num: number, multiply: number) => {
    return Math.round(num / multiply) * multiply;
  };

  function isright(e: number) {
    if (e >= 1 && e <= 5) {
      return e;
    } else if (e > 5) {
      return (e = 5);
    } else return e;
  }

  const [sumValue, setSumValue]: any = useState(400000);
  const [timeValue, setTimeValue]: any = useState(5);
  const [monthValue, setMonthValue]: any = useState(7067);

  const procent = (sumValue / 100) * 6;

  const monthPay = (e: number) => {
    let months = Number(timeValue) * 12;
    return (e = (Number(sumValue) + procent) / months);
  };

  const sumPay = (e: number) => {
    let months = Number(timeValue) * 12;
    let sum = monthValue * months;
    return (e = sum - procent);
  };

  // const ref = useRef<HTMLElement>(null);

  // const handleClick = (event: MouseEvent) => {
  //   if (ref.current && !ref.current.contains(event.target as Node)) {
  //     console.log(round(sumPay(sumValue), 1000));
  //     console.log(monthPay(monthValue).toFixed(0));
  //     return round(sumPay(sumValue), 1000);
  //     return monthPay(monthValue).toFixed(0);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClick);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  const sumRef = useOutsideClick(() => {
    console.log(round(sumPay(sumValue), 1000));
    console.log(monthPay(monthValue).toFixed(0));
    return round(sumPay(sumValue), 1000);
  });

  // console.log(monthValue);

  return (
    <div className='calc__wrapper'>
      <div className='calc__container'>
        <h3>Выберите желаемые условия кредита:</h3>
        <div id='calc__form_0' className='calc__form'>
          <h4 className='calc__title'>
            <div className='calc__title_black'>Сумма кредита</div>
            <div className='calc__title_gray'>51 000 - 4 050 000 рублей</div>
          </h4>
          <div>
            <NumericFormat
              id='calc__sum'
              step={1000}
              allowNegative={false}
              className='input'
              required
              placeholder='400000 &#8381;'
              onValueChange={(values) => {
                const { value }: any = values;
                setSumValue(value);
              }}
              value={sumValue}
              defaultValue={400000}
              thousandSeparator=' '
              suffix=' &#8381;'
              decimalScale={0}
              customInput={TextField}
              type='text'
              getInputRef={sumRef}
            />
          </div>
        </div>
        <div id='calc__form_group_1' className='calc__form_group'>
          <div id='calc__form_1' className='calc__form'>
            <h4 className='calc__title'>
              <div className='calc__title_black'>Срок кредита</div>
              <div className='calc__title_gray'>1 - 5 лет</div>
            </h4>
            <NumericFormat
              defaultValue={5}
              onValueChange={(values: any) => {
                const { value }: any = values;
                setTimeValue(value);
              }}
              value={isright(timeValue)}
              className='input'
              required
              suffix={getYear(timeValue)}
              placeholder='5 лет'
              thousandSeparator=' '
              customInput={TextField}
            />
          </div>
          <FormGroup id='calc__form_2' className='calc__form'>
            <h4>Ежемесячный платёж</h4>
            <NumericFormat
              id='calc__month'
              value={monthPay(monthValue)}
              onValueChange={(values) => {
                const { value }: any = values;
                setMonthValue(value);
              }}
              placeholder='7067 &#8381;'
              defaultValue={7067}
              suffix=' &#8381;'
              thousandSeparator=' '
              displayType='input'
              customInput={TextField}
              decimalScale={0}
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Calc;
