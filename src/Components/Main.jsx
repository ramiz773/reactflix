function Main({ children }) {
  // const [popMovies, setPopMovies] = useState([])
  // const [totalPages, setTotalPages] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         let { data } = await axios({
  //           method: "get",
  //           url: "https://api.themoviedb.org/3/movie/popular",
  //           params: {
  //             api_key: "f7083149ad71aa68e3e270bdfcaad937",
  //             page: page,
  //           },
  //         });

  //         setPopMovies(data.results);
  //         setTotalPages(data.total_pages);
  //         setTimeout(() => {
  //           setLoading(false);
  //         }, 3000);
  //       } catch (error) {
  //         console.log(error.message);
  //         setError(error.message);
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, [page]);

  return <main>{children}</main>;
}

export default Main;
