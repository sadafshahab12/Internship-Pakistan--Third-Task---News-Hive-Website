import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  // fetch user data from database
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists) {
          setUserData(userSnap.data());
        } else {
          console.log("No user Data found");
        }
      }
    };
    fetchUserData();
  });

  return (
    <div>
      {userData ? (
        <h2>Welcome {userData.firstName}</h2>
      ) : (
        <p>User data Laoding...</p>
      )}
    </div>
  );
};

export default UserProfile;
