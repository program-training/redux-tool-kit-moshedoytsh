import { useAppSelector } from "../store/hooks";

export default function Header() {
  const animal = useAppSelector(store => store.animal).animal;  

  return (<div className="header">החיה שנבחרה: {animal}</div>)
}