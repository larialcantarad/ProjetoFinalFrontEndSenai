import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function container3 (){
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("http://localhost:3000/produtos")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        })

    return(
        <>
            <div className="container "><br />
            <h1>Peças de queima de Estoque!:</h1>
            <div className='text-end' ><Link to="/criar2" className="btn btn-dark">Adicionar</Link></div>
            <table className="table" >
                <thead>
                    
                        <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>valor</th>
                        <th>tamanho</th>
                        <th>cor</th>
                        <th>Foto</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.produto}</td>
                        <td>{d.valor}</td>
                        <td>{d.tamanho}</td>
                        <td>{d.cor}</td>
                        <td> <img className="fto" src={d.foto}  /> </td>
                        <td>
                        <Link to={`/update2/${d.id}`} className="btn btn-primary">Atualizar</Link>
                        <button onClick={e => hardSubmit(d.id)} className='btn btn-sm ms-1 btn-danger' >Excluir</button>
                       
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        </>
       
    )
         function hardSubmit(id){
            const conf = window.confirm("Deseja realmente excluir isso???")
            if(conf)
            {
                axios.delete("http://localhost:3000/produtos/"+id)
                .then(res => {
                    alert("Dados excluidos com sucesso!!!")
                    navigat("/")
                }).catch(err = console.log(err))
            }
         }

}
export default container3