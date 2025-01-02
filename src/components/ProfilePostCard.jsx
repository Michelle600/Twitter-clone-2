import { useEffect, useState } from "react"
import { Button, Col, Image, Row } from "react-bootstrap"


export default function ProfilePostCard({ content, postId }) {

    const [likes, setLikes] = useState(0);

    const pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlPvTlastzOevM8_LaO6NJrSTS7w52seekA&s"

    useEffect(() => {
        fetch(`https://f3df3187-df5d-4484-aab2-0c0337738e53-00-3kp652t9e5awf.pike.replit.dev/likes/post/${postId}`)
            .then((response) => response.json())
            .then((data) => setLikes(data.length))
            .catch((error) => console.error("Error:", error));
    }, [postId]);

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
                <div className="d-flex justify-content-between">
                    <Button variant="light">
                        <i className="bi bi-chat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-repeat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-heart"> {likes} </i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-upload"></i>
                    </Button>
                </div>
            </Col>
        </Row>
    )
}
