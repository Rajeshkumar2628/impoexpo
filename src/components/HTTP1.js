import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function HTTP1() {
    const [list, setList] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [marks, setMarks] = useState(0)
    const[img,setImg]=useState('')
   const[isPopup,setIsPopup]=useState(false)
    const [id1, setId1] = useState('')
    const [name1, setName1] = useState('')
    const [marks1, setMarks1] = useState(0)
    const[img1,setImg1]=useState('')


    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then(res => { setList(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    const handleSubmit =() => {
        axios.post('http://localhost:3000/students',{
            id:id,name:name,marks:marks,img:img
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})   
    }
    

     const handleDelete=(id)=>{
        axios.delete(`http://localhost:3000/students/${id}`)
       .then(res=>{console.log(res)})
        alert('Deleted successfully')
        .catch(err=>{console.log(err)})
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:3000/students/${id}`,{
          id:id1,name:name1,marks:marks1,img1:img1  
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})   
        
    }

    const openPopup=(data)=>{
        setIsPopup(true)
        setId1(data.id)
        setName1(data.name1)
        setMarks1(data.marks1)
        setImg1(data.img1)

    }
    return (
        <div>
        <h1>Staff Page</h1>
        <div className='form-1'>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}}/>
                <br></br>
                <label>img</label>
                <input type='img' value={img} onChange={(e)=>{setImg(e.target.value)}}/>
                <br></br>
                <label>name:</label>
                <input type='text' value={name}  onChange={(e)=>{setName(e.target.value)}} />
                <br></br>
                <label>marks:</label>
                <input type='text' value={marks}  onChange={(e)=>{setMarks(e.target.value)}}/>
                <br></br>
                <button type='submit'>ADD DATA</button>
               
            </form>
        </div>
        {
            isPopup&&
            <div className='update-popup'>
                <button onClick={()=>{setIsPopup(false)}}>x</button>
                <div className='form-1'>
                <form onSubmit={handleUpdate}>
                <label>ID:</label>
                <input type='text' value={id1} onChange={(e)=>{setId1(e.target.value)}}/>
                <br></br>
                <label>img</label>
                <input type='img' value={img} onChange={(e)=>{setImg(e.target.value)}}/>
                <label>name:</label>
                <input type='text' value={name1}  onChange={(e)=>{setName1(e.target.value)}} />
                <br></br>
                <label>marks:</label>
                <input type='text' value={marks1}  onChange={(e)=>{setMarks1(e.target.value)}}/>
                <br></br>
                <button type='submit'>ADD DATA</button>
            </form>
            <div className='container'>
                {list.map(x=>(<div className='flex-items'>
                <img src={x.image} height={150} width={150}/>
                <h3>{x.name}</h3>
                <h3>{x.marks}</h3>
                
                <button>see details</button>



                </div>))}


                </div>
                    </div>

            </div>
        }
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {list.map(x=>(
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td><img src={x.img}></img></td>
                    <td>{x.name}</td>
                    <td>{x.marks}</td>

                    <button onClick={()=>openPopup(x)} >update</button>
                    <button onClick={()=>handleDelete(x.id)}>Deleted</button> 
                </tr>
               ))}
            </tbody>
        </table>
        </div>
    
    )
}
