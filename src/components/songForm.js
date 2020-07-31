import React,{useState} from 'react'

function SongForm({addSong}) {
    const[title,setTitle]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> song name:</label>
                    <input type="text" value={title} required onChange={(e)=>setTitle(e.target.value)}/>
                    <input type="submit" value="add song" />

                
            </form>
            
        </div>
    )
}

export default SongForm;
