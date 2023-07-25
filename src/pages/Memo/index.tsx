import React, { memo } from 'react'

const Title1 = memo(() => {
    console.log("Title 1: Rendered Once")
    return <div>Title 1</div>
})

const Title2 = memo((props:{count:number}) => {
    console.log("Title 2: Rendered " + props.count)
    return <div>
        Title 2
    </div>
})


const MemoPage = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>Open Your Console</div>
            <Title1 />
            <Title2 count={count} />
            <div style={{ color: 'green' }} onClick={() => { setCount((state) => state + 1) }}>Press Me Multiple</div>
        </div>
    )
}

export default MemoPage