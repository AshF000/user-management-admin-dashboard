import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  TableHeader,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Table,
} from "@/components/ui/table";

const UsersList = ({ users, setUsers }) => {
  // handle user status toggle
  const handleStatus = (id) => {
    setUsers(
      users.map((u) =>
        u.id !== id
          ? u
          : { ...u, gender: u.gender === "male" ? "female" : "male" }
      )
    );
  };

  // handle user delete
  const handleUserDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className={cn("max-h-[calc(100vh-250px)] overflow-y-auto ")}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-14 text-right">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className={cn("min-w-24")}>Status</TableHead>
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
              return (
                <TableRow key={user.id}>
                  <TableCell className="w-14 text-right font-medium">
                    {user.id}
                  </TableCell>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <div className={cn("flex items-center w-full h-full")}>
                      <span className={cn("relative flex size-3 mr-2")}>
                        {user.gender === "female" && (
                          <span
                            className={cn(
                              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-emerald-500"
                            )}
                          ></span>
                        )}
                        <span
                          className={cn(
                            "relative inline-flex size-3 rounded-full",
                            user.gender === "female"
                              ? "bg-emerald-500"
                              : "bg-red-400"
                          )}
                          aria-label={
                            user.gender === "female" ? "Active" : "Inactive"
                          }
                        ></span>
                      </span>
                      {user.gender.charAt(0).toUpperCase() +
                        user.gender.slice(1)}
                    </div>
                  </TableCell>
                  <TableCell className={"text-right"}>
                    <Button
                      onClick={() => {
                        handleStatus(user.id);
                      }}
                      className={cn(
                        "mr-2 w-24",
                        user.gender === "female"
                          ? "bg-red-400 dark:bg-red-500 dark:text-white"
                          : "bg-emerald-500 dark:bg-emerald-600 dark:text-white"
                      )}
                    >
                      {user.gender === "female" ? "Deactivate" : "Activate"}
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon-sm"
                      aria-label="Delete"
                      className={cn("hover:bg-red-400 rounded-full")}
                      onClick={() => handleUserDelete(user.id)}
                    >
                      <TrashIcon size={20} strokeWidth={2} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersList;
