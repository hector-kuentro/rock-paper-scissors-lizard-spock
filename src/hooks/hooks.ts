import { useEffect, useState } from 'react'

function debounce(fn: () => void, ms: number) {
    let timer: any
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn()
        }, ms)
    }
}

interface UseIsMobileParams {
    limit?: number;
}

export const useIsMobile = ({ limit }: UseIsMobileParams = {}) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth <= (limit || 600))
    }, [])

    useEffect(() => {
        const debouncedHandleResize = debounce(() => {
            setIsMobile(window.innerWidth <= (limit || 600))
        }, 500)

        window.addEventListener('resize', debouncedHandleResize)

        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    return isMobile
}