import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Details.scss";
import { WOW } from "wowjs";
import { DotLoader } from "react-spinners";

export default function Details() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);

  const { id } = useParams();
  const jwtToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWJlZTViMGFiMmU1Y2Y2MmVjNzc3ZThkYjYwNTdmZSIsInN1YiI6IjY2NTVjNThlMzJjNGIwNTM1NWEzNmE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFE5NZQk4EhObnSNIoVFWftCLNoLO7OOsc-z7baeZ7Y";
  const baseUrl = "https://api.themoviedb.org/3";
  const movieEndpoint = `${baseUrl}/movie/${id}`;
  const videoEndpoint = `${movieEndpoint}/videos`;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(movieEndpoint, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          params: {
            language: "en-US",
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    const fetchVideo = async () => {
      try {
        const response = await axios.get(videoEndpoint, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          params: {
            language: "en-US",
          },
        });
        if (response.data.results.length > 0) {
          setVideoKey(response.data.results[0].key); // Use the first video key
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchMovie();
    fetchVideo();
  }, [movieEndpoint, videoEndpoint, jwtToken]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-100">
      {loading && (
        <div className="loading-overlay">
          <DotLoader
            color={"rgb(255, 0, 0)"}
            loading={loading}
            size={250}
            className="loading-spinner"
          />
        </div>
      )}
      <div
        className="movie-details w-100"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      >
        <div className="d-flex w-100 px-5 align-items-center gap-2 py-3">
          <Link className="fs-3 text-white " to="/">
            Home
          </Link>
          <span className="fs-3">/</span>
          <h3 className="">Details Movies</h3>
        </div>

        <div className="container w-100">
          <div className="row align-items-center">
            <div className="box-left p-0 col-lg-6 col-md-12 wow animate__animated animate__fadeInUpBig animate__slow 1s">
              <strong className="rating-details">
                {" "}
                {movie.vote_average.toFixed(1)}{" "}
              </strong>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="col-lg-6 col-md-12 p-2 mt-3 info wow animate__animated animate__fadeInDownBig animate__slow 1s">
              <h2 className="fs-1 text-warning">{movie.title}</h2>
              <p className="py-3">{movie.overview}</p>
              <p className="py-3">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              {videoKey && (
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoKey}`}
                    title="Movie Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
