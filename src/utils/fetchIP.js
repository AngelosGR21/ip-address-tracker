import axios from "axios";

const fetchIP = async (ip, setIPData, setPosition, setLoading) => {
  setLoading(true);
  //CHECKING IF VALUE INTRODUCED BY CLIENT IS A DOMAIN || IPV4 || IPV6
  let domain = /[a-z]\./;

  try {
    const response = await axios.get(
      domain.test(ip) === true
        ? `https://geo.ipify.org/api/v1?apiKey=at_HQrZnnGYyKxrgfJ3QzjX96yHJedqN&domain=${ip}`
        : `https://geo.ipify.org/api/v1?apiKey=at_HQrZnnGYyKxrgfJ3QzjX96yHJedqN&ipAddress=${ip}`
    );
    setIPData(response.data);
    setPosition([response.data.location.lat, response.data.location.lng]);
  } catch (e) {
    console.log(e);
    console.log("Error fetching");
  }
  setLoading(false);
};

export default fetchIP;
