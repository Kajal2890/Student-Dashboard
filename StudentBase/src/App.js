import React from "react";
import "./style/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Todo from "./Todolist/todo";
import Navbar from "./Crud/Layout/Navbar";
import Students from "./Crud/students/Students";
import Student from "./Crud/students/studen_onet";
import StudentForm from "./Crud/students/studentForm";

// to add firebase
 import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
 import Login from './Crud/Pages/login';
 //protected rout
 import PrivateRoute from "./Crud/rout/privateRouter";
 

function App() {
  return (
    <>
     <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
     <BrowserRouter>
     <PrivateRoute component={Navbar} />
       
        <switch>
          <Route exact path="/" component={Students} />
          <Route exact path="/student/:id" component={Student} />
          <Route exact path="/studentForm/:id?" component={StudentForm} />
          <Route exact path="/login" component={Login} />
              {/* <Route component={NotFound} /> */}
        </switch>
        {/* <Students /> */}
      </BrowserRouter>
     </ReactReduxFirebaseProvider>
     </Provider>
    </>
  );
}

export default App;
