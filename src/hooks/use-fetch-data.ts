import axios, { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  timeout: 0,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const useFetchData = <T extends Array<any>>(
  apiEndpoint: string,
): [boolean, T | any[]] => {
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | any[]>([]);

  // onChange => reset data array - infinite-loop blocker
  const endpoint = useMemo(() => apiEndpoint, [apiEndpoint]);
  useEffect(() => {
    setData([]);
  }, [endpoint]);

  const handleFetch = useCallback(
    (url: string) => {
      setError(null);
      setIsLoading(true);
      axiosInstance
        .get(url)
        .then((response: AxiosResponse<T>) => {
          setData((response.data as T).flat());
        })
        .catch((error: AxiosError) => {
          setData([]);
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [axiosInstance],
  );

  useEffect(() => {
    if (data.length === 0 && !error) {
      handleFetch(apiEndpoint);
    } else if (error) {
      toast.error(error.message);
      toast.info('Try again later...');
    }
  }, [apiEndpoint, data, error]);

  return [isLoading, data];
};
