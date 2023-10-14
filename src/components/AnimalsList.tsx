import { update } from "../store/animalSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"

export default function AnimalsList({ list, itemClass }: {list: string[], itemClass: string}) {
  const dispatch = useAppDispatch()
  const animal = useAppSelector(store => store.animal).animal
  return (<div className="animal-list">
    {list.map(item => <div
    className={item === animal ? 'selected-animal' : itemClass}
    onClick={() => dispatch(update(item))}
    key={item}>
      {item}
    </div>)}
  </div>)
}