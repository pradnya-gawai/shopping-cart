"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
// src/hooks/useFetchData.js

const useFetchData = (endpoint, _ref) => {
  let {
    setData,
    setLoading,
    setError
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    data,
    loading,
    error
  } = (0, _reactRedux.useSelector)(state => state.products); // Update with the correct selector

  (0, _react.useEffect)(() => {
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
  return {
    data,
    loading,
    error
  };
};
var _default = exports.default = useFetchData;