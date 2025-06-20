import React from 'react'
import { useEffect, useState } from 'react';

import { fetchForecast } from '../../api/fetchForecast';


export default function RainPrediction({city}) {
    const [rainAdvice, setRainAdvice] = useState('');

  useEffect(() => {
    const getForecast = async () => {
      try {
        const advice = await fetchForecast(city);
        setRainAdvice(advice);
      } catch (err) {
        setRainAdvice("Unable to fetch rain prediction.");
      }
    };

    if (city) getForecast();
  }, [city]);

  return  <p className='text-center text-blue-300 font-medium mt-2'>{rainAdvice}</p>;
}
