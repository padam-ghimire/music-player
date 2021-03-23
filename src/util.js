import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ChillHop(){
    return [
        {
            name:"Sunrise Hike",
            artist:"Ruck P",
            cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",
            id:uuidv4(),
            active:true,
            color:["#FFB6C1","#FF1493"],
            audio:"https://mp3.chillhop.com/?dl=1&track_id=12133&name=Sunrise+Hike"
        },

        {
            name:"Brockoli",
            artist:"Philanthrope, Brock Berrigan, Birocratic, iamalex",
            cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/6050e37e9caabfe4efedb7d4_80image%2029.jpg",
            id:uuidv4(),
            active:false,
            color:["#FFB6C1","#FF1493"],
            audio:"https://mp3.chillhop.com/?dl=1&track_id=12730&name=Parksong"
        },


        {
            name:"New Song",
            artist:"Philanthrope, Brock Berrigan, Birocratic, iamalex",
            cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/6050e37e9caabfe4efedb7d4_80image%2029.jpg",
            id:uuidv4(),
            active:false,
            color:["#FFB6C1","#FF1493"],
            audio:"https://mp3.chillhop.com/?dl=1&track_id=12730&name=Parksong"
        },
    ];
}

export default ChillHop;
