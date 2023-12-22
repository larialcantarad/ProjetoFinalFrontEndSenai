import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function container (){
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("https://bd-user-qimz.onrender.com/usuarios")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        })

    return(
        <>
            <div className="container "><br />
            <h1>Produtos Femininos:</h1>
            <div className='text-end' ><Link to="/criar" className="btn btn-dark">Adicionar</Link></div>
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
<<<<<<< HEAD
                        <div className = "botoes">
                            <div>
                                <Link to={`/update/${d.id}`} className="btn btn-sm ms-1 btn-success">Atualizar</Link>
                            </div>
                            <div>
                                <button onClick={e => hardSubmit(d.id)} className='btn btn-sm ms-1 btn-danger' >Excluir</button>
                            </div>
                        </div>
=======
                            <div className = "botoes">
                                <div>
                                    <Link to={`/update/${d.id}`} className="btn btn-sm ms-1 btn-success">Atualizar</Link>
                                </div>
                                <div>
                                    <button onClick={e => hardSubmit(d.id)} className='btn btn-sm ms-1 btn-danger' >Excluir</button>
                                </div>
                            </div>
>>>>>>> 17c72fd028415cd112c06ac359aeb1b78a263780
                       
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
                axios.delete("http://localhost:3000/usuarios/"+id)
                .then(res => {
                    alert("Dados excluidos com sucesso!!!")
                    navigat("/")
                }).catch(err = console.log(err))
            }
         }

}
export default container
