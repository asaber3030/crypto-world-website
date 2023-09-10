import axios from "axios";

import { useState, useEffect } from "react";
import { API_URL } from "../helpers/api";

function useAPI(breakpoint: string, method: string = "GET") {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    try {
      const response = axios.request({
        method: method,
        url: API_URL + breakpoint,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'd5c0c4b333msh3a9bd0721554899p17a169jsn0085b0cbf572',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      })
      // @ts-ignore
      setData(response.data)
    } catch (e: any) {
      setError(e)
    }
  }, [])

  return { data, error, loading }
}

export default useAPI