import Card from "./Card";
import data from "../helpers/data";

console.log(data);
const Main = () => {
  return (
    <div>
      <h1 className="text-center text-warning mt-2">IMAGE GALLERY</h1>
      <Card data={data} />
    </div>
  );
};

export default Main;
