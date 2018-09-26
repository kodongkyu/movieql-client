import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import styled from "styled-components";
import Movie from "./Movie";
 const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;


// const Home = () => <Query query={HOME_PAGE}>
// {
//     ({loading, data, error}) => {
//         if(loading) return "loading";
//         if(error) return "Something Happened";
        
//         return data.movies.map(movie => (
//         <h2 key={movie.id}>
//         {movie.title} / {movie.rating}
//         </h2>
//         ));
//     }
// }
// </Query>;

const Home = () => (
    <Container>
        <Query query={HOME_PAGE}>
            {({ loading, data, error }) => {
                if (loading) return "loading";
                if (error) return "something happened";
                return data.movies.map(movie => (
                <Movie
                    id={movie.id}
                    key={movie.id}
                    poster={movie.medium_cover_image}
                    title={movie.title}
                    rating={movie.rating}
                />
                ));
            }}
        </Query>
    </Container>
);

export default Home;