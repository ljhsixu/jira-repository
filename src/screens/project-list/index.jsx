import React from 'react'
import {SearchPanel} from "./Search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import {cleanObject} from "../../utils";
import * as qs from 'qs'
const apiUrl = `http://localhost:3001`
export  const  ProjectListScreen = ()=>{
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [users, setUsers] = useState([])

    const [list, setList] = useState([])
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res=>{
            if(res.ok){
                setList(await res.json())
            }
        })
    },[param])
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async res=>{
            if(res.ok){
                setUsers(await res.json())
            }
        })
    },[])
    return <div>
        <SearchPanel param={param}  setParam={setParam} users={users}></SearchPanel>
        <List list={list} users={users} ></List>
    </div>
}