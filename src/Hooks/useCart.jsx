import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { isPending,  refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading && !!user,
    queryFn: async () => {
      console.log('Making request for user:', user?.email);
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      console.log('Response from axios:', res);
      return res.data;
    },
  });

  return [cart, refetch , loading];
};

export default useCart;
