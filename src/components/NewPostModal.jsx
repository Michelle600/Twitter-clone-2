import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { savePost } from "../features/posts/postsSlice"

export default function NewPostModal({ show, handleClose }) {
    const [postContent, setPostContent] = useState("")
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(savePost(postContent))
        handleClose();
        setPostContent("");

        // const token = localStorage.getItem("authToken")

        // const decode = jwtDecode(token);
        // const userId = decode.id

        // const data = {
        //     title: "Post Title",
        //     content: postContent,
        //     user_id: userId,
        // };

        // axios
        //     .post("https://f3df3187-df5d-4484-aab2-0c0337738e53-00-3kp652t9e5awf.pike.replit.dev/posts", data)
        //     .then((response) => {
        //         console.log("Success:", response.data);
        //         handleClose();
        //     })
        //     .catch((error) => {
        //         console.error("Error", error);
        //     });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="postContent">
                            <Form.Control
                                placeholder="What is happening?!"
                                as="textarea"
                                rows={3}
                                onChange={(e) => setPostContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        className="rounded-pill"
                        onClick={handleSave}
                    >
                        Tweet
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
