import React from 'react';

function ruokalista(props) {
    return (
        <div>
             {props.linjastot.map(linjasto => {
                return (
                    <p key={linjasto.Name}>
                    Linjasto: {linjasto.Name} <br/>
                    Ruoat: {linjasto.Components} 
                    </p> );
                     })
                    }
        </div> );

}



export default ruokalista;