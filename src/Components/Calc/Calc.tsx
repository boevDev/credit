import { FC } from 'react';
import { Button, FormGroup, TextField } from '@mui/material';
import './Calc.scss';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import getYear from '../getYear';
import PlusMinus from '../PlusMinus/PlusMinus';

const Calc: FC = () => {
  const round = (num: number, multiply: number) => {
    return Math.round(num / multiply) * multiply;
  };

  function isright(e: number) {
    if (e >= 1 && e <= 5) {
      return e;
    } else if (e > 5) {
      return (e = 5);
    } else if (e < 1) {
      return '';
    } else return '';
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
    return (
      setSumInput(() => {
        return round(sumPay(sumInput), 1000);
      }),
      setMonthInput(() => {
        return (
          (round(sumPay(sumInput), 1000) +
            Number((round(sumPay(sumInput), 1000) / 100) * (termValue * 6))) /
          months
        );
      })
    );
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
          <div className='calc__sum'>
            <NumericFormat
              id='calc__sum'
              step={1000}
              allowNegative={false}
              className='input'
              required
              placeholder='400 000 &#8381;'
              onValueChange={(values) => {
                const { value }: any = values;
                setSumValue(Number(value));
              }}
              value={sumInput}
              defaultValue={400000}
              thousandSeparator=' '
              suffix=' &#8381;'
              decimalScale={0}
              customInput={TextField}
              type='text'
              onBlur={sumOnBlur}
              inputProps={{
                className: 'calc__input',
              }}
            />
            <div className='calc__sum_btn calc__btn'>
              <PlusMinus
                onClickMinus={() => {
                  if (sumInput >= 101000) {
                    setSumInput(Number(sumValue) - 50000);
                    setMonthInput(() => {
                      return (
                        (Number(sumInput - 50000) +
                          Number(
                            ((sumInput - 50000) / 100) * (termValue * 6)
                          )) /
                        months
                      );
                    });
                  } else {
                    setSumInput(51000);
                    setMonthInput(() => {
                      return (
                        (Number(51000) +
                          Number((51000 / 100) * (termValue * 6))) /
                        months
                      );
                    });
                  }
                }}
                onClickPlus={() => {
                  if (
                    Number(sumInput) <= 4000000 &&
                    Number(sumInput) >= 51000
                  ) {
                    setSumInput(Number(sumValue) + 50000);
                    setMonthInput(() => {
                      return Number(
                        (Number(sumInput + 50000) +
                          Number(
                            ((sumInput + 50000) / 100) * (termValue * 6)
                          )) /
                          months
                      );
                    });
                  } else if (sumInput < 51000) {
                    setSumInput(51000);
                    setMonthInput(() => {
                      return (
                        (Number(51000) +
                          Number((51000 / 100) * (termValue * 6))) /
                        months
                      );
                    });
                  } else {
                    setSumInput(4050000);
                    setMonthInput(() => {
                      return (
                        (Number(4050000) +
                          Number((4050000 / 100) * (termValue * 6))) /
                        months
                      );
                    });
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div id='calc__form_group_1' className='calc__form_group'>
          <div id='calc__form_1' className='calc__form'>
            <h4 className='calc__title'>
              <div className='calc__title_black'>Срок кредита</div>
              <div className='calc__title_gray'>1 - 5 лет</div>
            </h4>
            <div className='calc__term'>
              <NumericFormat
                defaultValue={5}
                onValueChange={(values) => {
                  const { value }: any = values;
                  Number(setTermValue(value));
                  Number(setTermInput(value));
                }}
                value={isright(Number(termInput))}
                allowNegative={false}
                className='input'
                required
                suffix={getYear(Number(termInput))}
                placeholder='5 лет'
                thousandSeparator=' '
                customInput={TextField}
                onBlur={termOnBlur}
                inputProps={{
                  className: 'calc__input',
                }}
              />
              <div className='calc__term_btn calc__btn'>
                <PlusMinus
                  onClickMinus={() => {
                    if (termInput > 1) {
                      setTermInput(Number(termValue) - 1);
                      setMonthInput(() => {
                        return (
                          (Number(sumValue) +
                            Number(
                              (sumValue / 100) * ((Number(termValue) - 1) * 6)
                            )) /
                          ((Number(termValue) - 1) * 12)
                        );
                      });
                    } else {
                      setTermInput(1);
                    }
                  }}
                  onClickPlus={() => {
                    if (termInput < 5) {
                      setTermInput(Number(termValue) + 1);
                      setMonthInput(() => {
                        return (
                          (Number(sumValue) +
                            Number(
                              (sumValue / 100) * ((Number(termValue) + 1) * 6)
                            )) /
                          ((Number(termValue) + 1) * 12)
                        );
                      });
                    } else {
                      setTermInput(5);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <FormGroup id='calc__form_2' className='calc__form'>
            <h4>Ежемесячный платёж</h4>
            <div className='calc__month'>
              <NumericFormat
                onValueChange={(values) => {
                  const { value }: any = values;
                  setMonthInput(value);
                }}
                id='calc__month'
                value={monthInput}
                placeholder='8 667 &#8381;'
                defaultValue={8667}
                suffix=' &#8381;'
                thousandSeparator=' '
                displayType='input'
                customInput={TextField}
                decimalScale={0}
                onBlur={monthOnBlur}
                allowNegative={false}
                inputProps={{
                  className: 'calc__input',
                }}
              />
              <div className='calc__payment_btn calc__btn'>
                <PlusMinus
                  onClickMinus={() => {
                    if (monthInput >= 1205) {
                      setMonthInput(() => {
                        let x = Number(monthInput) - 100;
                        let sum = x * months;
                        let y = (sum / (100 + termValue * 6)) * 100;
                        return (
                          (round(y, 1000) +
                            Number((round(y, 1000) / 100) * (termValue * 6))) /
                          months
                        );
                      });
                      setSumInput(() => {
                        let sum = (Number(monthInput) - 100) * months;
                        let result: number =
                          (sum / (100 + termValue * 6)) * 100;
                        return round(result, 1000);
                      });
                    } else {
                      setMonthInput(1105);
                    }
                  }}
                  onClickPlus={() => {
                    if (monthInput <= 357650) {
                      setMonthInput(() => {
                        let x = Number(monthInput) + 100;
                        let sum = x * months;
                        let y = (sum / (100 + termValue * 6)) * 100;
                        return (
                          (round(y, 1000) +
                            Number((round(y, 1000) / 100) * (termValue * 6))) /
                          months
                        );
                      });
                      setSumInput(() => {
                        let sum = (Number(monthInput) + 100) * months;
                        let result: number =
                          (sum / (100 + termValue * 6)) * 100;
                        return round(result, 1000);
                      });
                    } else {
                      setMonthInput(357750);
                    }
                  }}
                />
              </div>
            </div>
          </FormGroup>
        </div>
      </div>
      <Button
        id='xxx'
        style={{
          borderRadius: '40px',
          color: 'white',
          fontFamily: 'Inter',
          fontSize: '16px',
          textTransform: 'none',
          padding: '16px 62px',
          lineHeight: '19px',
          maxWidth: '202px',
          margin: '0 auto',
        }}
        variant='contained'
      >
        Получить
      </Button>
    </div>
  );
};

export default Calc;
