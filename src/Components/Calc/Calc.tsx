import { FC } from 'react';
import { FormGroup, TextField } from '@mui/material';
import './Calc.scss';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import getYear from './getYear';

const Calc: FC = () => {
  const [sumValue, setSumValue]: any = useState('');
  const [timeValue, setTimeValue]: any = useState('');
  const [monthValue, setMonthValue]: any = useState('');

  return (
    <div className='calc__wrapper'>
      <div className='calc__container'>
        <h3>Выберите желаемые условия кредита:</h3>
        <div id='calc__form_0' className='calc__form'>
          <h4 className='calc__title'>
            <div className='calc__title_black'>Сумма кредита</div>
            <div className='calc__title_gray'>51 000 - 4 050 000 рублей</div>
          </h4>
          <NumericFormat
            allowNegative={false}
            className='input'
            required
            placeholder='450 000 &#8381;'
            onValueChange={(values) => {
              const { value }: any = values;
              setSumValue(value);
            }}
            value={sumValue}
            thousandSeparator=' '
            suffix=' &#8381;'
            decimalScale={2}
            customInput={TextField}
            type='text'
          />
        </div>
        <div id='calc__form_group_1' className='calc__form_group'>
          <div id='calc__form_1' className='calc__form'>
            <h4 className='calc__title'>
              <div className='calc__title_black'>Срок кредита</div>
              <div className='calc__title_gray'>1 - 5 лет</div>
            </h4>
            <NumericFormat
              defaultValue={5}
              onValueChange={(values) => {
                const { value }: any = values;
                setTimeValue(value);
              }}
              value={timeValue}
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
              onValueChange={(values) => {
                const { value }: any = values;
                setMonthValue(value);
              }}
              value={monthValue}
              placeholder='8 911 &#8381;'
              defaultValue='8911'
              suffix=' &#8381;'
              thousandSeparator=' '
              displayType='input'
              customInput={TextField}
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Calc;
