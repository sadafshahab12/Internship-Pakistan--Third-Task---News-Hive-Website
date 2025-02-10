import { useEffect } from "react";
import { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import Loading from "./Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    const API_URL = `https://newsapi.org/v2/everything?q=latest&apiKey=${API_KEY}`;
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.log(`Error in fetching data : ${error}`);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };
    fetchNews();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  let carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="max-w-6xl mx-auto py-8 px-6 text-slate-700 space-y-6 ">
      <h1 className="text-3xl text-center font-bold ">Latest News</h1>
      <div className="xs:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-Karla gap-8">
        {news.slice(0, 6).map((latestNews, index) => {
          const date = new Date(latestNews.publishedAt);
          const formatedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          const formatedTime = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
          return (
            <div
              key={index}
              className="p-5 shadow-md space-y-6 hover:bg-rose-200 transition-all duration-500"
            >
              <div className="space-y-2 ">
                <h1 className="sm:text-xl text-[16px] font-black">
                  {latestNews.title}
                </h1>
                <p className="text-[12px] bg-slate-600 inline-block text-white py-1 px-4">
                  Author : {latestNews.author}
                </p>
              </div>
              <img
                src={latestNews.urlToImage}
                alt="Latest-News-Image"
                className="w-full h-40 xxs:h-60 object-cover rounded-md hover:scale-105 hover:rotate-3 transition-all duration-300"
              />
              <p className="text-sm">{latestNews.description}</p>
              <div className="flex justify-between text-[12px] ">
                <p className="flex items-center gap-4">
                  {" "}
                  <MdDateRange className="w-5 h-5 " /> {formatedDate}
                </p>
                <p className="flex items-center gap-4">
                  <IoMdTime className="w-5 h-5 " />
                  {formatedTime}
                </p>
              </div>
              <a href={latestNews.url} target="_blank">
                <button className="cursor-pointer py-2 px-4 rounded-md bg-red-700 text-white text-sm">
                  Read More
                </button>
              </a>
            </div>
          );
        })}
      </div>
      {/* mobile card carousel  */}
      <div className="xs:hidden block h-125">
        <Slider {...carouselSettings}>
          {news.slice(0, 6).map((latestNews, index) => {
            const date = new Date(latestNews.publishedAt);
            const formatedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            const formatedTime = date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            });
            return (
              <div
                key={index}
                className="p-2 space-y-4  transition-all duration-500 min-h-125"
              >
                <div className="space-y-2 ">
                  <h1 className="sm:text-xl text-[16px] font-black">
                    {latestNews.title}
                  </h1>
                  <p className="text-[12px] bg-slate-600 inline-block text-white py-1 px-4">
                    Author : {latestNews.author}
                  </p>
                </div>
                <img
                  src={latestNews.urlToImage}
                  alt="Latest-News-Image"
                  className="w-full h-35 xxs:h-40 xs:h-60 object-cover rounded-md hover:scale-105 transition-all duration-300"
                />
                <p className="text-sm">{latestNews.description}</p>
                <div className="flex justify-between text-[12px] ">
                  <p className="flex items-center gap-4">
                    {" "}
                    <MdDateRange className="w-5 h-5 " /> {formatedDate}
                  </p>
                  <p className="flex items-center gap-4">
                    <IoMdTime className="w-5 h-5 " />
                    {formatedTime}
                  </p>
                </div>
                <a href={latestNews.url} target="_blank">
                  <button className="cursor-pointer py-2 px-4 rounded-md bg-red-700 text-white text-sm">
                    Read More
                  </button>
                </a>
              </div>
            );
          })}
        </Slider>{" "}
      </div>
    </section>
  );
};

export default News;
