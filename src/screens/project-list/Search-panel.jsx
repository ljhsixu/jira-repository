import {useEffect, useState} from "react";

export const SearchPanel = ()=>{
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [uses, setUsers] = useState([])
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('').then(async res=>{
           if(res.ok){
               setList(await res.json())
        }
        })
    },[param])
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={event => setParam({
                ...param,
                name:event.target.value
            })}/>
            <select  value={param.personId} onChange={event => setParam({
                ...param,
                personId: event.target.value
            })}>
                <option value={''} >负责人</option>
                {
                    uses.map(user=> <option value={user.id}> {user.name}</option>)
                }
            </select>
        </div>
    </form>
}