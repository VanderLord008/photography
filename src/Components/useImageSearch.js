import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useImagesearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [images, setImages] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setImages([])
  }, [query])





  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel;
    axios.get('https://api.unsplash.com/search/photos?client_id=ImP-1BlC1HGudOSZFyyju6hRkCuEMk061PgS0glmvsM',
    {
        params: { query: query, page: pageNumber ,per_page:25},
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setImages(prevImages => {
        return [...new Set([...prevImages, ...res.data.results.map(b => b.urls.regular)])]
      })
      setHasMore(res.data.results.total > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, images, hasMore }
}