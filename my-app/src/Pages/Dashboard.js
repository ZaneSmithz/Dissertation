import {useState, useEffect, React} from 'react'
import SideBar from '../Components/SideBar';
import {Container, Row, Col} from 'react-bootstrap'
import {collection, query, orderBy, onSnapshot, getDocs} from "firebase/firestore"
import {db} from '../firebase'
import '../Components/CSS/Dashboard.css';
import HomeCard from '../Components/HomeCard';
import { UseAuth } from '../Contexts/AuthContext';

const Dashboard = (props) => {
    const [users, setUser] = useState([]);
    const { currentUser } = UseAuth();

    useEffect(() => {
      const q = query(collection(db, currentUser.uid));
        onSnapshot(q, (querySnapshot) => {
          setUser(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          })))
        })
      },[])

    console.log(currentUser.uid);
      
    return (
      <Row>
        <div className="homeCardTopSpacing mx-5 my-5" md={3}>
            {users.map((user) => (
                <HomeCard
                firstName={user.data.first_name}
                lastName={user.data.last_name}
                moduleNum={user.data.currentModuleNum}
                chapterNum={user.data.currentChapterNum}
                />
            ))}
        </div>

        <hr/>
      </Row>
    )
}

export default Dashboard;