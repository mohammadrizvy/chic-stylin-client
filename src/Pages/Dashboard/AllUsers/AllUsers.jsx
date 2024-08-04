import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Loader from "../../Components/Loader/Loader";
import { MdFolderDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const AllUsers = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/users");
      return res.json();
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:7000/users/admin/${user._id} `, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`${user.name} is an admin now`);
          refetch();
        }
      });
  };

  const handleDeleteUser = (user) => {
    fetch(`http://localhost:7000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item removed");
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        toast.error("Failed to remove item");
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl pb-10 underline font-bold ">
        All Users
      </h1>
      <Toaster position="top-right" reverseOrder={false} />
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader className="border-b-2 border-black">
          <TableColumn className="text-large text-black">NAME</TableColumn>
          <TableColumn className="text-large text-black">Email</TableColumn>
          <TableColumn className="text-large text-black">Role</TableColumn>
          <TableColumn className="text-large text-black">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold ">{user.name}</TableCell>
              <TableCell className="font-semibold ">{user.email}</TableCell>
              <TableCell
                onClick={() => handleMakeAdmin(user)}
                className="font-semibold cursor-pointer "
              >
                {user.role === "admin" ? (
                  <MdOutlineAdminPanelSettings size={20} />
                ) : (
                  <FaRegUser size={18} />
                )}
              </TableCell>
              <TableCell>
                <MdFolderDelete className="cursor-pointer"
                  onClick={()=>handleDeleteUser(user)}
                  size={25}
                  color="maroon"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;
