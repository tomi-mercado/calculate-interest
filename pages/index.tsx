import { useState } from 'react';

import Head from 'next/head';

import { InputSentenceNumber } from '@components';

const calculateTotals = ({
  interest,
  capital,
  days,
  usePerDay,
}: {
  interest: number | '';
  capital: number | '';
  days: number | '';
  usePerDay: number | '';
}) => {
  const interestPerDay = (interest || 0) / 100 / 365;

  let total = capital;
  let generated = 0;

  Array.from({ length: days || 0 }).forEach((_, i) => {
    const dayGenerated = (total || 0) * interestPerDay;
    generated += dayGenerated;
    total = (total || 0) * (1 + interestPerDay) - (usePerDay || 0);
  });

  const savingPercentage = (generated / ((usePerDay || 0) * (days || 0))) * 100;

  return {
    total: (total || 0).toFixed(2),
    generated: generated.toFixed(2),
    variation: ((total || 0) - (capital || 0)).toFixed(2),
    savingPercentage: savingPercentage.toFixed(2),
  };
};

export default function Home() {
  const [interest, setInterest] = useState<number | ''>(0);
  const [capital, setCapital] = useState<number | ''>(0);
  const [days, setDays] = useState<number | ''>(0);
  const [usePerDay, setUsePerDay] = useState<number | ''>(0);

  const { total, variation, generated, savingPercentage } = calculateTotals({
    interest,
    capital,
    days,
    usePerDay,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value === '' ? '' : Number(value);

    switch (name) {
      case 'interest':
        setInterest(newValue);
        break;
      case 'capital':
        setCapital(newValue);
        break;
      case 'days':
        setDays(newValue);
        break;
      case 'usePerDay':
        setUsePerDay(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>Calcular intereses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col space-y-3 md:items-center">
          <h1 className="text-2xl">Calcular intereses</h1>

          <InputSentenceNumber
            label="Interés"
            name="interest"
            value={interest}
            onChange={handleChange}
          />

          <InputSentenceNumber
            label="Capital"
            name="capital"
            value={capital}
            onChange={handleChange}
          />

          <InputSentenceNumber
            label="Días"
            name="days"
            value={days}
            onChange={handleChange}
          />

          <InputSentenceNumber
            label="Uso por día"
            name="usePerDay"
            value={usePerDay}
            onChange={handleChange}
          />

          <div>
            Tu dinero variará en <span className="font-bold">{variation}</span>.{' '}
            <br />
            Generarás <span className="font-bold">{generated}</span> con tu
            inversión. <br />
            Habrás ahorrado el{' '}
            <span className="font-bold">{savingPercentage}%</span> de tus
            gastos. <br />
            En total tendrás <span className="font-bold">{total}</span>.
          </div>
        </div>
      </div>
    </>
  );
}
