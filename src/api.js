import axios from "axios";

const tiktokdownload =async(url)=>{
    console.log(url)
    const options = {
        method: 'GET',
        url: 'https://tiktok-download-video1.p.rapidapi.com/getVideo',
        params: {
          url: url,
          hd: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'a530cf930amshf13b6542dfd0938p1394b0jsn460214461275',
          'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com'
        }
      };
      
     
        const response = await axios.request(options);
        console.log(response)
        return response
    
}
export default tiktokdownload;