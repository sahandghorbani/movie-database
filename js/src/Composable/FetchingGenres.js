const Fetch = async (genreID) => {
  let data = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US"
  );
//   let res = await data.json();
  //  console.log(res.genres);
  // console.log(
  //     res.genres.filter((el)=>{
  //         let x = el.id == 99
  //        return Array.from(x).forEach((element) => {
  //              console.log(element);

  //         });
  //     })
  // );

  // await res.genres.filter((el)=>{
  //     let x =el.id === genreID
  //     return x
  //     // return el.id === genreID
  // })
  return "horror"
};
const FetchingGeneres = () => {
  return  {Fetch};
};
export default FetchingGeneres;
