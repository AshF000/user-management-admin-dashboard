import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { TrashIcon } from "lucide-react";

const UsersList = ({ users }) => {
  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-14 text-right">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan="5" className="text-center font-medium">
                No Users Found
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => {
              const isActive = user.gender !== "male";
              return (
                <TableRow key={user.id}>
                  <TableCell className="w-14 text-right font-medium">
                    {user.id}
                  </TableCell>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className={cn("flex gap-2 items-center")}>
                    <span
                      className={cn(
                        "inline-block w-2 h-2 rounded",
                        isActive ? "bg-emerald-500" : "bg-red-400"
                      )}
                      aria-label={isActive ? "Active" : "Inactive"}
                    />
                    {isActive ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell className={"text-right"}>
                    <Button
                      className={cn(
                        "mr-2",
                        isActive
                          ? "bg-red-400 dark:bg-red-500 dark:text-white"
                          : "bg-emerald-500 dark:bg-emerald-600 dark:text-white"
                      )}
                    >
                      {isActive ? "Deactivate" : "Activate"}
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon-sm"
                      aria-label="Submit"
                      className={cn("hover:bg-red-400")}
                      // className={
                      //   "bg-red-500 rounded-full hover:bg-black dark:hover:bg-white "
                      // }
                    >
                      <TrashIcon
                        size={20}
                        strokeWidth={2}
                        // className="text-white dark:hover:text-red-500"
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>

      {/* <table className="users-table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          ) : (
            users.map((user) => {
              const isActive = user.gender !== "male";

              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td className="status-cell">
                    <span
                      className={`status-dot ${
                        isActive ? "active" : "inactive"
                      }`}
                      aria-label={isActive ? "Active" : "Inactive"}
                    />
                    {isActive ? "Active" : "Inactive"}
                  </td>

                  <td className="actions">
                    <button className="btn danger">Delete</button>
                    <button className="btn">
                      {isActive ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table> */}
    </>
  );
};

export default UsersList;
