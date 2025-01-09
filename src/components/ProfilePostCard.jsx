import { useContext, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { likePost, removeLikeFromPost, deletePost } from "../features/posts/postsSlice";
import { AuthContext } from "./AuthProvider";
import UpdatePostModal from "./UpdatePostModal";


export default function ProfilePostCard({ post }) {

    const { content, id: postId, imageUrl } = post;
    const [likes, setLikes] = useState([]);
    const dispatch = useDispatch()
    const { currentUser } = useContext(AuthContext)
    const userId = currentUser.uid;

    const isLiked = likes.includes(userId);
    // const token = localStorage.getItem("authToken");
    // const decode = jwtDecode(token)
    // const userId = decode.id;

    const pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlPvTlastzOevM8_LaO6NJrSTS7w52seekA&s"

    const [showUpdateModal, setShowUpdateModal] = useState(false)

    const handleShowUpdateModal = () => setShowUpdateModal(true)
    const handleCloseUpdateModal = () => setShowUpdateModal(false)
    // const BASE_URL = "https://f3df3187-df5d-4484-aab2-0c0337738e53-00-3kp652t9e5awf.pike.replit.dev";

    // useEffect(() => {
    //     fetch(`${BASE_URL}/likes/post/${postId}`)
    //         .then((response) => response.json())
    //         .then((data) => setLikes(data))
    //         .catch((error) => console.error("Error:", error));
    // }, [postId]);

    // const isLiked = likes.some((like) => like.user_id === userId)

    const handleLike = () => (isLiked ? removeFromLikes() : addToLikes());

    const addToLikes = () => {
        setLikes([...likes, userId])
        dispatch(likePost({ userId, postId }))
    }

    const removeFromLikes = () => {
        setLikes(likes.filter((id) => id !== userId))
        dispatch(removeLikeFromPost({ userId, postId }))

    };

    const handleDelete = () => {
        dispatch(deletePost({ userId, postId }))
    }

    return (
        <Row
            className="p-3"
            style={{
                borderTop: "1px solid #D3D3D3",
                borderBottom: "1px solid #D3D3D3"
            }}>
            <Col sm={1}>
                <Image src={pic} fluid roundedCircle />
            </Col>

            <Col>
                <strong> Michelle </strong>
                <span> abc@gmail.com </span>
                <p>{content} </p>
                <Image src={imageUrl} style={{ width: 150 }} />
                <div className="d-flex justify-content-between">
                    <Button variant="light">
                        <i className="bi bi-chat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-repeat"></i>
                    </Button>
                    <Button variant="light" onClick={handleLike}>
                        {isLiked ? (
                            <i className="bi bi-heart-fill text-danger"></i>
                        ) : (
                            <i className="bi bi-heart"></i>
                        )}
                        {likes.length}
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-upload"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-pencil-square"
                            onClick={handleShowUpdateModal}></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-trash"
                            onClick={handleDelete}></i>
                    </Button>
                    <UpdatePostModal
                        show={showUpdateModal}
                        handleClose={handleCloseUpdateModal}
                        postId={postId}
                        originalPostContent={content}
                    />
                </div>
            </Col>
        </Row>
    )
}
