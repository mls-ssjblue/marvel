import React, {useEffect, useState} from "react"
import {get, Service} from "../fetchUtils"

export const CharacterList: React.FC = () => {
    interface Response {
        id: number
        name: string
    }

    const [result, setResult] = useState<Service<Response[]>>(
        {status: 'loading'})

    useEffect(() => {
        const fetch = async () => {
            const response = await get<Response[]>('/characters')
            setResult({status: 'loaded', payload: response})
        }
        fetch()
    }, [])


    return (
        <>
            <div>{result.status === 'loading' && result.status}</div>
            <div>{result.status === 'loaded' && result.payload && result.payload.map((character =>
                <div style={{display: 'flex'}}>
                    <div>{character.id}</div>
                    <div>{character.name}</div>
                </div>))
            } </div>
        </>

    )


}
