import type { User } from "../types";
import { UserCard } from "./UserCard";

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <div className="mt-6 space-y-4">
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
}
