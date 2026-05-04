import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import RecordsNumDisplay from "./RecordsNumDisplay";
import DisplayDataCards from "./DisplayCards";

export default function SearchOptions() {
  const [isLoading, setIsLoading] = useState(false);
  const [filterDrop, setFilterDrop] = useState("model");
  const [filterInput, setFilterInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const { fetchData } = useFetch(
    filterDrop,
    filterInput,
    setIsLoading,
    setErrorMessage,
    setData,
  );

  const handleDropChange = (event) => {
    setFilterDrop(event.target.value);
  };

  const handleInputChange = (event) => {
    setFilterInput(event.target.value);
  };

  return (
        

          
          
        
      
      <DisplayDataCards data={data} />
    </div>
  );
}
