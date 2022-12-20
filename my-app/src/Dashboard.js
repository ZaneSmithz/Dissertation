import {useState, useEffect, React} from 'react'
import SideBar from './Components/SideBar';
import {Container, Row, Col} from 'react-bootstrap'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import './Components/CSS/Dashboard.css';
import HomeCard from './Components/HomeCard';



const Dashboard = (props) => {

    const [users, setUser] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'users'));
        onSnapshot(q, (querySnapshot) => {
          setUser(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

      console.log(users);
      


    return (
        
        <Container>
            <Row>
                <Col id="sidebar-wrapper" className="mx-2" md={4} >
                    <SideBar/>
                </Col>
                <Col  className="g-0" md={8}>
                <div className="containerColour">
                    <div className="homeCardTopSpacing mx-5" md={3}>
                    {users.map((user) => (
                        <HomeCard
                        firstName={user.data.first_name}
                        lastName={user.data.last_name}
                        />
            
                    ))}
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Dashboard;