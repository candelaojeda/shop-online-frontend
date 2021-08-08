import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Formulary() {
  const [smShow, setSmShow] = useState(false);

  const validate = Yup.object({
    userName: Yup.string()
      .max(15, "Debe ingresar 15 caracteres o menos.")
      .required("Nombre de usuario es requerido."),
    email: Yup.string()
      .email("Email es invalido.")
      .required("Email es requerido."),
    textarea: Yup.string()
      .max(500, "Debe ingresar 500 caracteres o menos.")
      .min(10, "Debe ingresar 10 caracteres o más.")
      .required("Campo de texto es requerido."),
  });

  return (
    <>
      <h3>¿QUIERES DEJAR UNA CONSULTA? ¡EXPRÉSATE AQUÍ!</h3>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          textarea: "",
        }}
        validationSchema={validate}
        onSubmit={() => {
          setSmShow(true);
        }}
      >
        {(formik) => (
          <div className="form-detail">
            <Form>
              <TextField label="Usuario " name="userName" type="text" />
              <TextField label="Email   " name="email" type="email" />
              <TextField label="Consulta" name="textarea" type="textarea" />
              <Button className="btn-submit" type="submit">
                ENVIAR CONSULTA
              </Button>
              <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    ¡LISTO!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>Se ha enviado tu consulta con éxito.</Modal.Body>
              </Modal>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
