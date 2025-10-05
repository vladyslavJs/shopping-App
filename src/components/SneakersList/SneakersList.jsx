import axios from "axios";
import { useEffect, useState } from "react";

export default function SneakersList() {
    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSneakers = async () => {
            try {
                const response = await axios.get("https://api.kicks.dev/api/v3/search", {
                    headers: {
                    Authorization: `Bearer sd_7QmDcxGfxj2Ku4cFYw4ztnqvNiGWiPuP`
                },
                    // params: {
                    //     query: "Nike",
                    //     limit: 10
                    // }
                });
                console.log("DATA:", response.data);
                setSneakers(response.data.result);
            } catch (error) {
                console.error("Something wrong: ", error);
            }
        }
        fetchSneakers();
    }, []);

    
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {sneakers.map((shoe) => (
        <div key={shoe.id} className="border p-2 rounded-lg shadow">
          <img src={shoe.image.thumbnail} alt={shoe.name} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold">{shoe.name}</h2>
          <p className="text-sm text-gray-500">{shoe.brand}</p>
        </div>
      ))}
    </div>
  );
}


