import React from 'react'
import { BigData } from './BigDataConst'

const UseMemoPage = () => {
    const [count, setCount] = React.useState(0);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const bigData = React.useMemo(() => {
        console.log("🚀 ~ file: index.tsx:9 ~ bigData ~ bigData:", "Big data render once!")
        return BigData
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const smallData = React.useMemo(() => {
        console.log("🚀 ~ file: index.tsx:13 ~ UseMemoPage ~ smallData")
        return [
            { small: 12 }
        ]
    }, [count])

    return (
        <div>
            <div>Open Your Console</div>
            <div style={{color: 'green'}} onClick={() => { setCount((state) => state + 1) }}>Press Me Multiple</div>
        </div>
    )
}

export default UseMemoPage