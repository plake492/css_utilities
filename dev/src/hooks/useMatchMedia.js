import { useLayoutEffect, useState } from 'react'

export const useMatchMedia = (query = '(max-width: 600px)') => {
  const [matches, setMatches] = useState(undefined)

  useLayoutEffect(() => {
    const watchedMedia = window.matchMedia(query)
    const mediaListener = () => setMatches(watchedMedia.matches)

    mediaListener()

    watchedMedia.addEventListener('change', mediaListener)

    return () => watchedMedia.removeEventListener('change', mediaListener)
  }, [query, setMatches])

  return matches
}
