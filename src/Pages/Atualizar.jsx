
import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"



function atualizar(){
    //criando as vardiaveis
    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()

    useEffect(() => {
        axios.get("https://bd-user-qimz.onrender.com/usuarios/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    })

    function HandSunmit(event){
        event.preventDefault()
        axios.put("http://localhost:3000/usuarios/"+id, data)
        .then(res =>{ alert("Dados atualizados com sucesso!!")
            navigat('/')
        })
        

    }
    

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSunmit} >
                <div >
                    <label htmlFor="name">Id</label><br />
                    <input type="text" name="id" disabled value={data.id} className="from-control" 
                    />
                </div>
                <div >
                    <label htmlFor="name">Produto</label><br />
                    <input type="text" name="produto" value={data.produto} className="from-control" 
                    onChange={e => setData({...data, produto: e.target.value})} />
                </div><br />
                <div>
                 <label htmlFor="tamanho">Tamanho</label><br />
                 <input type="tamanho" name="tamanho" className="from-control"
                 onChange={e=>setInputData({ ...inputData, tamanho: e.target.value })}
                  />
             </div>
             <br />
             <div>
                 <label htmlFor="cores">Cor</label><br />
                 <input type="cores" name="cores" className="from-control"
                 onChange={e=>setInputData({ ...inputData, cor: e.target.value })}
                  />
             </div>
             <br />
                <div>
                    <label htmlFor="valor">Valor</label><br />
                    <input type="valor" name="valor" value={data.valor} className="from-control"
                     onChange={e => setData({...data, valor: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="detalhes">Foto</label><br />
                    <input type="detalhes" name="detalhes" value={data.foto} className="from-control"
                     onChange={e => setData({...data, foto: e.target.value})} />
                </div><br />
                <button className="btn btn-info" >Atualizar</button>
            </form>
            </div> 
           
           
        </div>
    )
}

export default atualizar