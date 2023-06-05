import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  timeout: 0,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const useFetchData = <T extends Array<any>>(): [
  AxiosError | null,
  boolean,
  T | any[],
  (url: string) => void,
] => {
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | any[]>([]);

  const handleFetch = (url: string) => {
    setError(null);
    setIsLoading(true);
    instance
      .get(url)
      .then((response: AxiosResponse<T>) => {
        setData((response.data as T).flat());
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return [error, isLoading, data, handleFetch];
};
