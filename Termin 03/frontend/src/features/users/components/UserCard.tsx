import { type User } from "../types";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex items-center gap-6 border border-gray-100 hover:border-indigo-200">
      {user.profile_image ? (
        <img
          src={`data:image/png;base64,${user.profile_image}`}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-24 h-24 rounded-full object-cover border-3 border-indigo-400 shadow-inner"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl">
          N/A
        </div>
      )}

      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">
          {user.first_name} {user.last_name}
        </h2>

        <div className="mt-2 space-y-1">
          {user.country && (
            <p className="text-gray-500 flex items-center gap-2">
              <span className="text-indigo-700">Country:</span> {user.country}
            </p>
          )}
          {user.birth_date && (
            <p className="text-gray-500 flex items-center gap-2">
              <span className="text-indigo-700">Birth date:</span>{" "}
              {user.birth_date}
            </p>
          )}
        </div>
      </div>

      <div className="text-indigo-500 text-2xl hover:text-indigo-700 transition-colors cursor-pointer">
        ➔
      </div>
    </div>
  );
};
