import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import * as actions from '../../hook/actions'

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

function AddProductModal({reducer}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {state, dispatch} = reducer
  

  return (
    <>
      <Button onClick={handleOpen} sx={{ width: '100px', color: 'white', backgroundColor: 'green'}}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Container fluid="md">
              <Row className="mb-4">
                <Col md={1}>ID</Col>
                <Col md={11}>
                  <TextField
                    fullWidth
                    size="small"
                    id="id"
                    name="id"
                    label="ID"
                    variant="outlined"
                    onChange={(e) => dispatch(actions.setProduct(e.target.name, e.target.value, state.productInput))}
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={1}>Name</Col>
                <Col md={11}>
                  <TextField
                    fullWidth
                    size="small"
                    name="name"
                    id="name"
                    label="Name"
                    variant="outlined"
                    onChange={(e) => dispatch(actions.setProduct(e.target.name, e.target.value, state.productInput))}
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={1}>GPA</Col>
                <Col md={11}>
                  <TextField
                    fullWidth
                    size="small"
                    name="gpa"
                    id="gpa"
                    label="GPA"
                    variant="outlined"
                    onChange={(e) => dispatch(actions.setProduct(e.target.name, e.target.value, state.productInput))}
                  />
                </Col>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'end'}}>
                <Button onClick={handleClose} sx={{ width: '70px'}}>Cancel</Button>
                <Button onClick={() => {
                  dispatch(actions.addProduct(state.productInput, state.products))
                  handleClose()
                }} sx={{ width: '70px'}}>Confirm</Button>
              </Row>
            </Container>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default AddProductModal;
