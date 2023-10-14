import { update } from "../store/animalSlice"
import { useAppDispatch } from "../store/hooks"

export default function OtherAnimalInput() {
  const dispatch = useAppDispatch()
  return (<input
    placeholder="שם אחר"
    onChange={ev => dispatch(update(ev.target.value))}></input>)
}