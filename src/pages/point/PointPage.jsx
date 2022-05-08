import React from 'react'
import { TOKEN_LOCAL } from '../../utils'
import AdaTokenPoint from './middleware/AdaTokenPoint'
import TidakAdaToken from './middleware/TidakAdaToken'

const PointPage = () => {
    const token = TOKEN_LOCAL

    return (
        <div className='pointPage'>
            <div className="containerMain">


                {(() => {
                    if (!token) {
                        return (
                            <TidakAdaToken />
                        )
                    } else {
                        return (

                            <AdaTokenPoint />
                        )
                    }
                })()}
            </div>
        </div>

    )
}

export default PointPage