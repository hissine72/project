import axios from'axios'
import React ,{useEffect, useState} from 'react'
import  {FaFacebook,FaTwitter,FaGoogle} from 'react-icons/fa'
 import  './Table.css'
 
function Table(){
    
        
    
    const [data,setData]=useState([])
    const[name,setName]=useState('')
    const[speed,setSpeed]=useState('')
    const[price,setPrice]=useState('')
    const[uname,usetName]=useState('')
    const[uspeed,usetSpeed]=useState('')
    const[uprice,usetPrice]=useState('')
    const [editId,setEditId]=useState(-1)
    useEffect(()=>{
        
        axios.get('http://localhost:9000/Cars')
        .then(res=>setData(res.data))
        .catch(er=>console.log(er));
        
    
    
    },[])
    const handleSubmit=(event)=>{
    event.preventDefault();
    const id=  data.length+ 1;
    axios.post('http://localhost:9000/Cars', {id:id,name:name,speed:speed,price:price})
    .then(res=>{
        window.location.reload()
    })
    .catch(er=>console.log(er));
    }

    const handleEdit= (id)=>{
        axios.get('http://localhost:9000/Cars/'+id)
        .then(res=>{
            usetName(res.data.name)
            usetSpeed(res.data.speed)
            usetPrice(res.data.price)
        })
        .catch(er=>console.log(er));
        setEditId(id)

    }
    const handleUpdate=()=>{
        axios.put('http://localhost:9000/Cars/'+editId ,{id:editId,name:uname,speed:uspeed,price:uprice})
        .then(
         res=>{
            window.location.reload();
            setEditId(-1);
         }

        ).catch(err=>console.log(err))

    }

    const handleDelete=(id)=>{
        axios.delete('http://localhost:9000/Cars/'+id)
        .then(res=>{
            window.location.reload();
        })
        .catch(er=>console.log(er));


    }
return(
    
    <>
    <section className='common-section'>
        <h1>admin page</h1>

    </section>
    
<div className='container'>
    


    <div className='form-div'>
<form onSubmit={handleSubmit}>
    <input className='main-input' type="text" placeholder='enter name' onChange={e=>setName(e.target.value)} />
    <input className='main-input' type="text" placeholder='enter speed'onChange={e=>setSpeed(e.target.value)} />
    <input className='main-input' type="text" placeholder='enter price'onChange={e=>setPrice(e.target.value) }/>
     <button className='btn' >Add</button>    


</form>
</div>

    </div>
    <div className='Cotainer-2'>
    <div className='tab' >
    <table>
      <tr>
        <th>id </th>
        <th>name </th>
        <th>speed </th>
        <th>price </th>
        <th>action </th>
    </tr>
    
     <tbody style={{}}>
     {
      data.map((user,index)=>(
        user.id===editId?
        <tr> 
             <td>{user.id}</td>
             <td><input type="text" value={uname}  onChange={e=>usetName(e.target.value)}/></td>
             <td><input type="text" value={uspeed} onChange={e=>usetSpeed(e.target.value)}/></td>
             <td><input type="text" value={uprice} onChange={e=>usetPrice(e.target.value) } /></td>
             <td> <button onClick={handleUpdate}>update</button> </td>
             
        </tr>
        
        :
     <tr key={index}>
        <td>{user.id} </td>
        <td>{user.name} </td>
        <td>{user.speed} </td>
        <td>{user.price} </td>
        <td>
            <button className='edit' onClick={()=> handleEdit (user.id)}> edit</button>
            <button className='delete' onClick={()=>handleDelete(user.id)}> delete</button>
        </td>


        


     </tr>
      


   


       ) )


     }

     </tbody>

    </table>
    </div>
    </div>



<footer>
    <div className='footer-content'>
        <h3>admin page</h3>
        <p>lorem jskljl mnll fdsas adsd adsddas dqwed wqdaswqeq qwdaeqweqw qwerewqewq qwqweewqewq qwewqeqweqw wqeqeq</p>
        <ul className='social'>
            <li ><a href='#'><FaTwitter className='twitter' /></a></li>
            <li ><a href='#'><FaFacebook className='facebook' /></a></li>
            <li ><a href='#'><FaGoogle className='google' /></a></li>
        </ul>


    </div>
    
    <div className='footer-bottom'>
        <p>copyright &copy;2023,Developed by Our Team. All rights reserved </p>
    </div>
    
</footer>

</>
)


}
export default Table;