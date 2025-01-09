import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProfileSideBar from "../components/ProfileSideBar";
import ProfileMidBody from "../components/ProfileMidBody";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../components/AuthProvider";


export default function ProfilePage() {

    const auth = getAuth();
    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext);

    // const [authToken, setAuthToken] = useLocalStorage("authToken", "");

    if (!currentUser) {
        navigate("/login");
    }

    const handleLogout = () => {
        auth.signOut();
    };

    // useEffect(() => {
    //     if (!authToken) {
    //         navigate("/login")
    //     }
    // }, [authToken, navigate])

    // const handleLogout = () => {
    //     setAuthToken("")
    // };

    return (
        <>
            <Container>
                <Row>
                    <ProfileSideBar handleLogout={handleLogout} />
                    <ProfileMidBody />
                </Row>
            </Container>
        </>
    )
}
