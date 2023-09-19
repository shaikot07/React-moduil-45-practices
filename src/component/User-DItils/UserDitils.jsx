import { useLoaderData } from "react-router-dom";
import './UserDitils.css'

const UserDitils = () => {
      const user = useLoaderData()
      const {name,email,username,city}= user;
      return (
            <div className="ditils-card">
                  <h2> <span>Distils about user</span>: {name}</h2>
                  <h3>User Name:{username}</h3>
                  <p>mail:{email}</p>
                  <p>City:{city}</p>
                  

            </div>
      );
};

export default UserDitils;