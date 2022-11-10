import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Sarah McConor`
    }, [title])
}

export default useTitle;