import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from "../Layout/Avatar";
 import {useFirestoreConnect,useFirestore } from 'react-redux-firebase';
 import {useSelector} from 'react-redux';
import Loading from '../Layout/Loading';

 const Students = ()=>{
   //to fetch data from redux store
  const students = useSelector((state) =>state.firestore.ordered.Students);
   const firestore = useFirestore();
  console.log(students);

//connect firebase
useFirestoreConnect([
 
  {
    collection:"Students",
  }
]);
//check load data from students
if(!students){
  return<Loading/>

}

const deleteStudent = async(id)=>{
  try {
    await firestore.collection("Students").doc(id).delete();
  } catch (error) {
   console.log(error); 
  }
}


     return(
       
         <div className="container">
             <div className="py-4">
                 <div className="row">
                    {
                        students.map((students,id)=>(
                         
                          <div className="col-lg-3 col-md-6 mb-4" key={students.id}>
                          <div className="card shadow text-center py-4">
                            <Avatar url={`https://i.pravatar.cc/150?img=${students.id}`} alt="image" />
                            <div className="card-body">
                        <h5 className="card-title mb-0">{students.name}</h5>
                              <p className="text-muted small">{students.email}</p>
                              <Link
                                to={`/student/${students.id}`}
                                className="btn btn-danger btn-profile"
                              >
                               View profile
                              </Link>
                              <button
                                className="btn btn-edit"
                                
                                onClick={() => deleteStudent(students.id)}
                              >
                                <span className="material-icons">delete_outline</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            };
            
            export default Students;
           