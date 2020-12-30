import React from 'react'

import '../style/Loading.css'

const Loading = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-spinner" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading