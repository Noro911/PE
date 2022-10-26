import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Context from "../../hook/Context";
import { useContext } from "react";
import * as actions from "../../hook/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

function ProductModal({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const context = useContext(Context);
  const { state, dispatch } = context;
  const { productInput, products } = state;

  return (
    <>
      <Button sx={{ width: '100px', color: 'white', backgroundColor: 'red'}}
        onClick={() => {
          handleOpen();
          dispatch(actions.setProductInput(product));
        }}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Product
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Container fluid="md">
              <Row className="mb-4">
                <Col md={1}>ID</Col>
                <Col md={11}>
                  <TextField
                    fullWidth
                    name="id"
                    size="small"
                    id="id"
                    label="ID"
                    variant="outlined"
                    value={productInput.id}
                    disabled
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={1}>Name</Col>
                <Col md={11}>
                  <TextField
                    fullWidth
                    name="name"
                    size="small"
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={productInput.name}
                    onChange={(e) =>
                      dispatch(
                        actions.setProduct(
                          e.target.name,
                          e.target.value,
                          productInput
                        )
                      )
                    }
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={1}>GPA</Col>
                <Col md={11}>
                  <TextField
                    fullWidth
                    name="gpa"
                    size="small"
                    id="gpa"
                    label="GPA"
                    variant="outlined"
                    value={productInput.gpa}
                    onChange={(e) =>
                      dispatch(
                        actions.setProduct(
                          e.target.name,
                          e.target.value,
                          productInput
                        )
                      )
                    }
                  />
                </Col>
              </Row>
              <Row style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  sx={{ width: "70px" }}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  sx={{ width: "70px" }}
                  onClick={() => {
                    dispatch(actions.updateProduct(productInput, products));
                    handleClose();
                  }}
                >
                  Confirm
                </Button>
              </Row>
            </Container>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ProductModal;
