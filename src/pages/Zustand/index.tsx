import { useZustandStore, useZustandStoreStorage } from './store'

const ZustandPage = () => {
    const [count, increment] = useZustandStore(store => [store.count, store.increment])
    const [countStg, incrementStg] = useZustandStoreStorage(store => [store.count, store.increment])

    return (
        <div>
            <p>Open you code editor and see how it use</p>
            <button onClick={increment}>
                count: {count}
            </button>
            <br />
            <p>Refresh it to see the different</p>
            <button onClick={incrementStg}>
                count with storage: {countStg}
            </button>
        </div>
    )
}

export default ZustandPage