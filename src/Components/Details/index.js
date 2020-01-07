import React from 'react'
import { DetailContainer, MovieInfo } from './style'
export default function MovieDetails(props) {
    const { Title, Year, Released, Runtime, Genre, Director, Actors, Plot, Language, Country, Awards, imdbRating, Images } = props;
    return (
        <DetailContainer>
                <div>
                        <img src={Images} alt={Title}/>
                </div>
                <MovieInfo>
                    <h1>{Title}</h1>
                    <span><strong>Yıl: </strong>{Year}</span>
                    <span><strong>Vizyona Giriş Tarihi: </strong>{Released}</span>
                    <span><strong>Süre: </strong>{Runtime}</span>
                    <span><strong>Tür: </strong>{Genre}</span>
                    <span><strong>Yönetmen: </strong>{Director}</span>
                    <span><strong>Aktörler: </strong>{Actors}</span>
                    <span><strong>Açıklama: </strong>{Plot}</span>
                    <span><strong>Dil: </strong>{Language}</span>
                    <span><strong>Ülke: </strong>{Country}</span>
                    <span><strong>Ödül: </strong>{Awards}</span>
                    <span><strong>IMDB Reyting: </strong>{imdbRating}</span>
                </MovieInfo>
        </DetailContainer>
    )
}
