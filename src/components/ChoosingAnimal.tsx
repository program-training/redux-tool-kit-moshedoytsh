import AnimalsList from "./AnimalsList";
import OtherAnimalInput from "./OtherAnimalInput";

export default function ChoosingAnimal() {
  return (<div className="choosing-animal">
    <div className="animal-lists">
      <AnimalsList list={["כלב", "זאב", "שועל"]} itemClass='green'/>
      <AnimalsList list={["חתול", "נמר", "אריה"]} itemClass="orang"/>
    </div>
    <OtherAnimalInput />
  </div>)
}