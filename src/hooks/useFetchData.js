// src/hooks/useFetchData.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useFetchData = (endpoint, { setData, setLoading, setError }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products); // Update with the correct selector

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        dispatch(setData(result));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch, endpoint, setData, setLoading, setError]);

  return { data, loading, error };
};

export default useFetchData;
