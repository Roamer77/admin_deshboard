import {shallowEqual, useDispatch, useSelector, useStore} from "react-redux";
import React, {useCallback} from "react";
import {Button} from "reactstrap";

function addFilmAction(title) {
    return {type: 'ADD_FILM', payload: title};
}
const AddFilmButton = React.memo(
    ({onAddFilm}) => <Button onClick={onAddFilm}>
        Add film Apollo 11
    </Button>
);
const FilmList = () => {
    const films = useSelector(state => state.data, shallowEqual);
    const dispatch = useDispatch();

    const addFilm = useCallback(() => dispatch(addFilmAction('Apollo 11')), [dispatch]);


    return (
        <>
            <ul>
                {
                    films.map(film => (
                        <li key={film}>{film}</li>
                    ))
                }
            </ul>
            <AddFilmButton onAddFilm={addFilm}/>

        </>
    );
};


export default FilmList;