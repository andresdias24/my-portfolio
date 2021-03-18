import React from 'react'

function Tittle({tittle, span}) {
    return (
        <div className="tittle">
            <h3> 
                {tittle}
                <span>
                    {span}
                </span>
            </h3>
        </div>
    )
}

export default Tittle
