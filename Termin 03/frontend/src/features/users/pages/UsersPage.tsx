import { useState, useEffect } from "react";
import { UserList } from "../components/UserList";
import { UserForm } from "../components/UserForm";
import { getUsers } from "../services/userService";
import type { User } from "../types";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const result = await getUsers();
      setUsers(result);
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserAdded = async () => {
    await fetchUsers();
    setShowForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold">Users</h1>

        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="text-white bg-indigo-800 hover:bg-indigo-700 px-2 py-1 rounded flex items-center space-x-2"
        >
          <span
            className={`transition-transform ${showForm ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
      </div>

      {showForm && <UserForm onUserAdded={handleUserAdded} />}

      {loading ? <p>Loading users...</p> : <UserList users={users} />}
    </div>
  );
}
