import classes from "../../generalStyles/FlexBox.module.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from "../Menu/Menu";
import TopNavBar from "../TopNavBar/TopNavBar";
import routes from "../../routes";
import React from "react";


const  PageRouter=()=>{
    return(
        <div className={classes.flex_container}>
            <BrowserRouter>
                <Menu className={"menu" + classes.flex_element}/>
                <div className={classes.flex_element}>

                    <div className={classes.flex_container1}>
                        <div className={classes.element1}>
                            <TopNavBar/>
                        </div>
                        <div className={classes.element2 }>
                            <Switch>
                                {
                                    routes.map(route => (
                                        <Route exact={route.exact} path={route.path} component={route.component}
                                               key={route.path}/>
                                    ))
                                }
                            </Switch>
                        </div>
                        <div className={classes.element3}>
                        </div>


                    </div>



                </div>

            </BrowserRouter>
        </div>
    );
};

export default PageRouter;