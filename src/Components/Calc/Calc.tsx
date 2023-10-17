import { FC } from 'react';
import { FormGroup, TextField } from '@mui/material';
import './Calc.scss';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import getYear from '../getYear';

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

  const [sumValue, setSumValue] = useState<number>(400000);
  const [termValue, setTermValue] = useState<number>(5);

  const [sumInput, setSumInput] = useState<number>(400000);
  const [termInput, setTermInput] = useState<number>(5);
  const [monthInput, setMonthInput] = useState<number>(8667);

  const procent = (sumValue / 100) * (termValue * 6);
  const months = Number(termValue) * 12;

  // получение суммы кредита из ежемесячного платежа:
  // еж.плат. * (срок.кр. * 12) = x
  // сумм.кр. = x - (x / (100 + срок.кр. * 6) * 100)

  const sumPay = (e: number) => {
    let sum = monthInput * months;
    return (e = (sum / (100 + termValue * 6)) * 100);
  };

  const sumOnBlur = (): void => {
    return setMonthInput(() => {
      return (Number(sumValue) + Number(procent)) / months;
    });
  };

  const termOnBlur = (): void => {
    return setMonthInput(() => {
      return (Number(sumValue) + Number(procent)) / months;
    });
  };

  const monthOnBlur = (): void => {
    return setSumInput(() => {
      return round(sumPay(sumInput), 1000);
    });
  };

  return (
    <div className='calc__wrapper'>
      <div className='calc__container'>
        <h3>Выберите желаемые условия кредита: </h3>
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
              value={sumInput}
              defaultValue={400000}
              thousandSeparator=' '
              suffix=' &#8381;'
              decimalScale={0}
              customInput={TextField}
              type='text'
              onBlur={sumOnBlur}
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
              onValueChange={(values) => {
                const { value }: any = values;
                setTermValue(value);
              }}
              value={isright(termInput)}
              className='input'
              required
              suffix={getYear(termInput)}
              placeholder='5 лет'
              thousandSeparator=' '
              customInput={TextField}
              onBlur={termOnBlur}
            />
          </div>
          <FormGroup id='calc__form_2' className='calc__form'>
            <h4>Ежемесячный платёж</h4>
            <NumericFormat
              onValueChange={(values) => {
                const { value }: any = values;
                setMonthInput(value);
              }}
              id='calc__month'
              value={monthInput}
              placeholder='7067 &#8381;'
              defaultValue={7067}
              suffix=' &#8381;'
              thousandSeparator=' '
              displayType='input'
              customInput={TextField}
              decimalScale={0}
              onBlur={monthOnBlur}
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Calc;
