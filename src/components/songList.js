import React,{useState,useEffect} from 'react';

import SongForm from './songForm';
const { v4: uuidv4 } = require('uuid');

function SongList() {
    const[songs,setSongs]=useState([
        {title:"magic",id:1},
        {title:"magic2",id:2},
        {title:"magic3",id:3},
        
    ]);
    const [age, setAge] = useState(20);
    const addSong=(title)=>{
        setSongs([...songs,{title,id:uuidv4()}])
    };
    useEffect(() => {
        console.log('useEffect callback', songs);
      }, [songs]);
    useEffect(() => {
        console.log('useEffect callback', age);
      }, [age]);
    return (
        <div className="song-list">
            <ul>
               {songs.map(song=>{
                   return <li key={song.id}>{song.title}</li>
               })}
            </ul>

            <SongForm addSong={addSong}/>
            
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    )
}

export default SongList;
