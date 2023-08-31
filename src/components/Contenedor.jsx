import { useState } from "react";
import Content from "./Content";
import Create from "./Create";
import Overview from "./Overview";

const Contenedor = () => {
  const [indexComponente, setIndexComponente] = useState(0);

  const handleButtonClick = (index) => {
    setIndexComponente(index);
  };

  return (
    <div className="text-center">
      <div className="mt-3 mb-3">
        <button
          type="button"
          className="btn btn-dark mr-2"
          onClick={() => handleButtonClick(0)}
        >
          Overview
        </button>
        <button
          type="button"
          className="btn btn-dark mr-2"
          onClick={() => handleButtonClick(1)}
        >
          Content
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => handleButtonClick(2)}
        >
          Create
        </button>
      </div>
      <div className="p-3">
        {indexComponente === 0 && <Overview />}
        {indexComponente === 1 && <Content />}
        {indexComponente === 2 && <Create />}
      </div>
    </div>
  );
}

export default Contenedor;
