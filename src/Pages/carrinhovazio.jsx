import '././carrinho.css'
import Menu from '../Components/menu'
import Rodape from '../Components/rodape'



function carrinho(){


    return(
        <> 
        <Menu />
        <div className= 'form-cantainer'>
            <h2> Seu Carrinho: </h2>
            <h3>Seu carrinho está vazio</h3>
             
        </div>  
        <Rodape />        
        
      
        </>
    )
}

export default carrinho
