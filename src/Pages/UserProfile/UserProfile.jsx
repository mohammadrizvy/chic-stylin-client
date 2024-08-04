import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Avatar } from "@nextui-org/react";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-20">
      <div className="bg-white py-10 overflow-hidden shadow-xl rounded-lg border">
        <div className="px-4 flex items-center py-5 sm:px-6">
          <div className="mr-5">
            {user ? (
              <>
                {" "}
                <Avatar isBordered radius="sm" src={user?.photoURL} />
              </>
            ) : (
              <>
                <Avatar showFallback src="https://images.unsplash.com/broken" />
              </>
            )}
          </div>
          <div>
            {user ? (
              <>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  User Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  This is some information about the user.
                </p>
              </>
            ) : (
              <>
                <p>You don't have an account please login or singup</p>
              </>
            )}
          </div>
        </div>
        <div className="border-t border-gray-400 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>

              {user ? (
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {" "}
                  {user?.displayName}
                </dd>
              ) : <p>NaN</p>}
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              {user ? (
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.email}
                </dd>
              ) : <p>NaN</p>}
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              {user ? (
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.phone_number}
                </dd>
              ) : <p>NaN</p>}
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              {user ? (
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.address}
                </dd>
              ) : <p>NaN</p>}
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
