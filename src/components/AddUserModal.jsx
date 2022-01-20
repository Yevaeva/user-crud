import { Formik } from "formik";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useActions } from "../helpers/hooks/useActions";
import { capitalizeFirstLetter } from "../helpers/utils";
import { userAddValidationSchema } from "../helpers/validation";

const types = ["name", "surname", "address", "email", "phone"];

const AddUserModal = (props) => {
  const { addUser, editUser } = useActions();
  const { user, onClose } = props;
  const initialValues = {
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
    address: user?.address || "",
    phone: user?.phone || "+374",
  };
  const handleSubmit = (data) => {
    if (user) {
      editUser({ ...data, _id: user._id });
    } else {
      addUser(data);
    }
  };
  return (
    <div>
      <Modal dialogClassName="size" centered show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={initialValues}
          validationSchema={userAddValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
          }) => {
            return (
              <div>
                <Modal.Body>
                  <div className="inputs">
                    {types.map((type) => {
                      return (
                        <div className="m-3" key={type}>
                          <input
                            className="p-1 w-100 rounded"
                            type="text"
                            placeholder={capitalizeFirstLetter(type) + " *"}
                            name={type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[type]}
                          />
                          <Form.Text
                            className={
                              touched[type] && errors[type]
                                ? "text-danger"
                                : "d-none"
                            }
                          >
                            {errors[type]}
                          </Form.Text>
                        </div>
                      );
                    })}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" className="butn" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    {user ? "Edit User" : "Add User"}
                  </Button>
                </Modal.Footer>
              </div>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUserModal;
