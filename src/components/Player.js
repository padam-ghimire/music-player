import React ,{useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons';


const Player = ({currentSong,setIsPlaying,isPlaying}) =>{

    const audioRef = useRef(null)
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }

    const timeUpadteHandler = (e) =>{
            const current = e.target.currentTime;
            const duration = e.target.duration;

            setAudioInfo({...audioInfo,currenTime:current,duration})
               
    }
    const getTime = (time) => {
        return (
            Math.floor(time /60 ) + ":" + ("0"+Math.floor(time % 60)).slice(-2)
        )
    }

    const [audioInfo,setAudioInfo]= useState({

         currenTime:null,
         duration:null

    })

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(audioInfo.currenTime)}</p>
                <input type="range" />
                <p>{getTime(audioInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={timeUpadteHandler} onTimeUpdate={timeUpadteHandler} ref={audioRef} src={ currentSong.audio}></audio>
        </div>
    )

}  


export default Player ;