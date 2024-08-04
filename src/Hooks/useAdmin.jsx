import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
  
    const { data: isAdmin, isLoading: isAdminLoading, isError, error } = useQuery({
      queryKey: ['isAdmin', user?.email],
      queryFn: async () => {
        if (!user?.email) {
          return false; // Return false if no user email
        }
        console.log('Making admin request for user:', user?.email);
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log('is admin response', res);
        return res.data.admin;
      },
      enabled: !!user?.email, // Only run the query if user email is available
      retry: 1, // Retry only once on failure
      onError: (error) => {
        console.error('Error fetching admin status:', error);
      }
    });
  
    return [isAdmin, isAdminLoading, isError, error];
  };
  
  export default useAdmin;
