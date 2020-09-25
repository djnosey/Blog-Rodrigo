import React from 'react'
import "./table.css"

function Table() {
    return (
        <div className = "table" >
            
<table width="100%"  cellspacing="0" cellpadding="0">

    <caption className = "table__caption">
        <h4>RANKING BROADCAST PROJEÇÕES: GO ASSOCIADOS CONQUISTA PRIMEIRO LUGAR NO TOP BÁSICO DO 2º TRI</h4>
        <p>Ranking Broadcast Projeções - Top 10 Básico 2º Trimestre</p>
    </caption>

    <tr>
        <th className ="table__head">Posição</th>
        <th className ="table__head">Instituições</th>
    </tr>
    <tr>
        <td className ="table__td1">1<sup>a</sup></td>
        <td>GO Associados</td>
    </tr>
    <tr>
        <td>2<sup>a</sup></td>
        <td><strong>Aviso em Dois Consultoria</strong></td>
    </tr>
    <tr>
        <td>3<sup>a</sup></td>
        <td>BNP Paribas</td>
    </tr>
    <tr>
        <td>4<sup>a</sup></td>
        <td>Parallaxis Consultoria Econômica</td>
    </tr>
    <tr>
        <td>5<sup>a</sup></td>
        <td>Planner Redwood</td>
    </tr>
    <tr>
        <td>6<sup>a</sup></td>
        <td>Garde Asset</td>
    </tr>
    <tr>
        <td>7<sup>a</sup></td>
        <td>Claritas</td>
    </tr>
    <tr>
        <td>8<sup>a</sup></td>
        <td>Barclays</td>
    </tr>
    <tr>
        <td>9<sup>a</sup></td>
        <td>iCâmara de Dirigentes Lojistas de Porto Alegre</td>
    </tr>
    <tr>
        <td>10<sup>a</sup></td>
        <td>Verde Asset</td>
    </tr>
    


</table>


        </div>
    )
}

export default Table 
