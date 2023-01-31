import {useState, useEffect, React} from 'react'
import SideBar from '../Components/Navigation/SideBar';
import {Container, Row, Col} from 'react-bootstrap'
import {collection, query, orderBy, onSnapshot, getDocs} from "firebase/firestore"
import {db} from '../firebase'
import '../Components/CSS/Dashboard.css';
import HomeCard from '../Components/Cards/HomeCard';
import { UseAuth } from '../Contexts/AuthContext';
import SelectedNameCard from '../Components/Cards/SelectedNameCard';

const Dashboard = (props) => {
    const [users, setUser] = useState([]);
    const { currentUser } = UseAuth();
    const [selected, setSelected] = useState(null);

    useEffect(() => {
      const q = query(collection(db, currentUser.uid));
        onSnapshot(q, (querySnapshot) => {
          setUser(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          })))
        })
      },[])
      
    console.log(selected);
    
    return (
      <Row>
        <div className='homeCardsDivsRowAlign'>
          <div className="homeCardTopSpacing mx-5 my-5" md={3}>
              {users.map((user) => (
                <HomeCard
                  selected={selected}
                  setSelected={setSelected}
                  user={user}
                  firstName={user.data.first_name}
                  lastName={user.data.last_name}
                  moduleNum={user.data.currentModuleNum}
                  chapterNum={user.data.currentChapterNum}
                />
            ))}
            </div>

          {selected != null ?
            <SelectedNameCard
              firstName={selected.data.first_name}
              lastName={selected.data.last_name}
              moduleNum={selected.data.currentModuleNum}
            />
            :
            <SelectedNameCard
              firstName={"Select"}
              lastName={"Me"}
              moduleNum={"Temp"}
            />}
          </div>
        
        <Col>
        <div className='homePageHr'></div>
          <div className='verticalLine'></div>
        </Col>
      </Row>
    )
}

export default Dashboard;