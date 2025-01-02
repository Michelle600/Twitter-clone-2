import { Button, Col, Image, Nav, Row, Spinner } from "react-bootstrap"
import ProfilePostCard from "./ProfilePostCard"
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByUser } from "../features/posts/postsSlice";




export default function ProfileMidBody() {
    // const [posts, setPosts] = useState([]);

    const url = "https://pbs.twimg.com/profile_banners/83072625/1602845571/1500x500"
    const pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlPvTlastzOevM8_LaO6NJrSTS7w52seekA&s"

    // const fetchPosts = (userId) => {
    //     fetch(`https://f3df3187-df5d-4484-aab2-0c0337738e53-00-3kp652t9e5awf.pike.replit.dev/posts/user/${userId}`)
    //         .then((response) => response.json())
    //         .then((data) => setPosts(data))
    //         .catch((error) => console.error("Error:", error))
    // };

    const dispatch = useDispatch()
    const posts = useSelector(store => store.posts.posts)
    const loading = useSelector(store => store.posts.loading)

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decodedToken = jwtDecode(token)
            const userId = decodedToken.id;
            dispatch(fetchPostsByUser(userId))
        }
    }, [dispatch]);

    return (
        <Col sm={6} className="bg-light" style={{ border: "1px solid lightgrey" }}>
            <Image src={url} fluid />
            <br />
            <Image
                src={pic}
                roundedCircle
                style={{
                    width: 150,
                    position: "absolute",
                    top: "140px",
                    border: "4px solid #F8F9FA",
                    marginLeft: 15,
                }}
            />

            <Row className="justify-content-end">
                <Col xs="auto">
                    <Button className="rounded-pill mt-2" variant="outline-secondary"> Edit Profile</Button>
                </Col>
            </Row>

            <p className="mt-5" style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}> Michelle </p>

            <p style={{ marginBottom: "2px" }}> @michelle </p>
            <p> Student of Sigma School</p>
            <p>Student</p>
            <p><strong>271</strong> Following <strong>610</strong> Followers </p>

            <Nav variant="underline" defaultActiveKey="/home" justify>
                <Nav.Item>
                    <Nav.Link eventKey="/home"> Tweets </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-1"> Replies </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-2"> Highlights </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-3"> Media </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/link-4"> Likes </Nav.Link>
                </Nav.Item>
            </Nav>
            {loading && (
                <Spinner animation="border" className="ms-3 mt-3" variant="primary" />
            )}

            {posts.length > 0 && posts.map((post) => (
                <ProfilePostCard key={post.id} content={post.content} postId={post.id} />
            ))}
        </Col>
    );
}
