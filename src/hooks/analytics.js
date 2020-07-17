import { useLocation } from 'components/Router'
import { useEffect } from 'react'

export const useAnalytics = () => {
    const location = useLocation()
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
            window.gtag('config', 'UA-9222619-11', {'page_path': location.pathname});
        }
    }, [location])
}