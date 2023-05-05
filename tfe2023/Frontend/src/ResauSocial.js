import { useEffect, useState} from "react";

function ReseauSocial() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
     
        <h1>Hello World</h1>
        <p>{!data ? "Loading..." : data}</p>

    </div>
  );
}

export default ReseauSocial;