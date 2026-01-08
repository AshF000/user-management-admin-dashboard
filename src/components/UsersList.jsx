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
import { Skeleton } from "./ui/skeleton";
import Popup from "./Popup";
import { useState } from "react";
import toast from "react-hot-toast";

const UsersList = ({ isLoading, users, setUsers }) => {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

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
  const handleUserDelete = (user) => {
    setOpenDialogue(true);
    setUserToDelete(user);
  };

  const confirmDelete = () => {
    if (!userToDelete) return;
    setUsers(users.filter((u) => u.id !== userToDelete.id));
    setOpenDialogue(false);
    toast.success(`User Deleted - Id: ${userToDelete.id}`);
    setUserToDelete(null);
  };

  return (
    <div className={cn("max-h-[calc(100vh-250px)] overflow-y-auto ")}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/12">Id</TableHead>
            <TableHead className={"w-3/12"}>Name</TableHead>
            <TableHead className={"w-3/12"}>Email</TableHead>
            <TableHead className={"w-2/12"}>Status</TableHead>
            <TableHead className="w-3/12 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading ? (
            // users skeleton
            <TableRow>
              <TableCell colSpan={5} className="w-14">
                <Skeleton className="w-full h-12" />
              </TableCell>
            </TableRow>
          ) : users.length === 0 ? (
            // no users
            <TableRow>
              <TableCell colSpan="5" className="text-center font-medium">
                No Users Found
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => {
              // users
              return (
                <TableRow key={user.id}>
                  <TableCell className="w-14 font-medium">{user.id}</TableCell>
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
                      onClick={() => handleUserDelete(user)}
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
      <Popup
        open={openDialogue}
        onClick={confirmDelete}
        onOpenChange={(open) => {
          if (!open) {
            setOpenDialogue(false);
            setUserToDelete(null);
          }
        }}
        title={`Delete Confirmation`}
        message={`Are you sure you want to delete ${userToDelete?.firstName} (Id: ${userToDelete?.id})?`}
      />
    </div>
  );
};

export default UsersList;
