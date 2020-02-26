import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "reactstrap";

const Test = () => {
    const data = useSelector(state => state);
    const despach=useDispatch();

    console.log(data);

    return (
        <div>
            <Button onClick={despach(action(data))}>  </Button>
        </div>
    );
};

function action(data) {

}

export default Test;