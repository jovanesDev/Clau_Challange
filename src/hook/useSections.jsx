import { useEffect, useState } from 'react'
import httpsService from '../services/httpsService'

const useSections = (section) => {
    const [loading, setLoading] = useState(false)
    const [data,setData] = useState(null)

    const getSection = async () => {
        setLoading(true)
        if(!section){
            setLoading(false)
            return
        }
        try {
            const result = await httpsService.get("/"+ section)
            setData(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getSection()
        // eslint-disable-next-line
    }, [section])
    



  return {
    data,
    loading
  }
}

export default useSections


