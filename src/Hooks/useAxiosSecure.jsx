import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Providers/AuthProviders';

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const axiosSecure = useMemo(() => axios.create({
    baseURL: 'http://localhost:7000', 
  }), []);

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          // Uncomment if you want to navigate to the login page on logout
          // navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
