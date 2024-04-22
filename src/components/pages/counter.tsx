import { useAppSelector } from "../../redux/store"
import { countSelector } from "../../redux/count/index"
import { useAppDispatch } from "../../redux/store"
import { decrement, increment } from "../../redux/count/index"


export const Counter = () => {
    const {count} = useAppSelector(countSelector)
    const dispatch = useAppDispatch()

const onDecrement = () => {
    dispatch( decrement() ) 
}

const onIncrement = () => {
    dispatch( increment() )
}
    return (
        <div className="counter">
            <h1>Counter</h1>
            <button onClick = {onDecrement} >-</button>
            <span>count is {count}</span>
            <button onClick = {onIncrement}>+</button>
        </div>
    )
}