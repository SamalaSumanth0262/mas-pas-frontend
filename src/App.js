import logo from './logo.svg';
import './App.css';
import Error from './utils/Error';
import React from 'react';
import ApiService from './ApiService';
const App = () => {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    getCurrency();
  }, []);

  const getCurrency = async () => {
    try {
      setLoading(true);
      let result = await ApiService.getCurrency();
      setResponse(result);
      setLoading(false);
    } catch (err) {
      Error(err);
    }
  };

  return (
    <div class='border-4 border-green-700 rounded-lg shadow-xl'>
      <div class='text-center text-2xl text-white bg-green-700'>
        🇬🇧 UK Dollar Exchange Rates
      </div>
      {loading ? (
        <div class='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
          <div class='animate-pulse flex space-x-4'>
            <div class='rounded-full bg-slate-700 h-10 w-10'></div>
            <div class='flex-1 space-y-6 py-1'>
              <div class='h-2 bg-slate-700 rounded'></div>
              <div class='space-y-3'>
                <div class='grid grid-cols-3 gap-4'>
                  <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                  <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                </div>
                <div class='h-2 bg-slate-700 rounded'></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='p-2 bg-gray-200'>
          <div className='text-xl text-bold text-right mb-5'>
            1 GBP = {response?.base}{' '}
          </div>
          <div className='flex justify-between mb-5 text-lg hover:cursor-pointer hover:text-xl hover:underline'>
            <div>🇺🇸 American Dollar (USD)</div>
            <div>{response?.rates?.USD}</div>
          </div>
          <div className='flex justify-between mb-5 text-lg hover:cursor-pointer hover:text-xl hover:underline'>
            <div>🇪🇺 Euro (EUR)</div>
            <div>{response?.rates?.EUR}</div>
          </div>
          <div className='flex justify-between mb-5 text-lg hover:cursor-pointer hover:text-xl hover:underline'>
            <div>🇫🇷 Swiss Franc (CHF) </div>
            <div>{response?.rates?.CHF}</div>
          </div>
          <div className='flex justify-between mb-5 text-lg hover:cursor-pointer hover:text-xl hover:underline'>
            <div>🇦🇺 Australian Dollar (AUD)</div>
            <div>{response?.rates?.AUD}</div>
          </div>
          <div className='flex justify-between mb-5 text-lg hover:cursor-pointer hover:text-xl hover:underline'>
            <div>🇨🇦 Canadian Dollar (CAD)</div>
            <div>{response?.rates?.CAD}</div>
          </div>
          <div className='text-right'>
            Rates on{' '}
            <span className='text-gray-700 text-bold text-xl'>
              {new Date(response?.date).toDateString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
