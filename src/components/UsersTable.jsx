import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useActions } from "../helpers/hooks/useActions";
import AddUserModal from "./AddUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const UsersTable = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { addOrEditUserSuccess, removeUserSuccess, users } = useSelector(
    (state) => state
  );
  const { getUsers } = useActions();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (addOrEditUserSuccess || removeUserSuccess) {
      getUsers();
      setToggleModal(false);
      setToggleDeleteModal(false);
      setSelectedUser(null);
    }
  }, [addOrEditUserSuccess, removeUserSuccess, getUsers]);
  return (
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th colSpan="5">
              <div className="d-flex justify-content-between m-4">
                <h4>Users</h4>
                <Button onClick={() => setToggleModal(true)}>New User</Button>
              </div>
            </th>
          </tr>
          <tr>
            <th className="text-center">Full name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Address</th>
            <th className="text-center">Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name + " " + user.surname}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <div className="d-flex flex-column">
                    <Button
                      className="my-1"
                      onClick={() => {
                        setToggleModal(true);
                        setSelectedUser(user);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setToggleDeleteModal(true);
                        setSelectedUser(user);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {toggleModal && (
        <AddUserModal
          onClose={() => {
            setToggleModal(false);
            setSelectedUser(null);
          }}
          user={selectedUser}
        />
      )}
      {toggleDeleteModal && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => {
            setToggleDeleteModal(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
};

export default UsersTable;
