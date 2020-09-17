import React, { useState, useEffect } from 'react'; 
import { IUserInput } from '../../common/interfaces'
import { Grid } from '@material-ui/core';
import MediaCard from '../mediacard/mediacard';

interface IState {
    original_name: string;
    original_title: string;
    poster_path: string;
    vote_average: string;
    overview: string;
    release_date: string;
}

interface IMediaGridProps {
    SearchQuery: (string | undefined);
    SearchType: (string | undefined);
}


function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ original_name: "", original_title: "", poster_path: "", vote_average: "", overview: "", release_date: "" }]);
    var url:string;
    if (props.SearchType==="movie"){
        url = `https://api.themoviedb.org/3/search/movie?api_key=a203833094c82d1d04d6053a159fe631&language=en-US&query=${props.SearchQuery}&page=1&include_adult=false`
    }
    else {
        url = `https://api.themoviedb.org/3/search/tv?api_key=a203833094c82d1d04d6053a159fe631&language=en-US&query=${props.SearchQuery}&page=1&include_adult=false`
    }
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setItemArray(response.results)
            })
            .catch(() => console.log("it didn't work")
            );
            

    }, [props.SearchQuery]);


    var Cards: JSX.Element[] = [];

    if (ItemArray) {
        ItemArray.forEach((el: IState, i: Number) => {
            if (!el) {
                return;
            }
            Cards.push(
                <Grid key={"card_" + i} item sm={4} md={3} lg={2} className="MediaGridCard">
                    <MediaCard TVTitle={el.original_name} MovieTitle={el.original_title} PosterImageUrl={el.poster_path} Description={el.overview} Vote={el.vote_average} Release={el.release_date} />
                </Grid>)
        })
    }



    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid;
