import { useEffect } from 'react'

/**
 * Sets document.title reactively.
 * @param {string} title — page-specific title (e.g. "India — Destinations")
 * @param {string} [suffix] — appended brand suffix, defaults to "Turio"
 */
export default function usePageTitle(title, suffix = 'Turio') {
  useEffect(() => {
    document.title = title ? `${title} | ${suffix}` : suffix
    return () => { document.title = suffix }
  }, [title, suffix])
}
