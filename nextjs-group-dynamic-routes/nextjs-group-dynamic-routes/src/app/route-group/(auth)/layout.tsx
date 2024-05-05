import React, { ReactNode } from 'react';

function RouteGroupLayout ({children} : {children:ReactNode}) {

    return(
        <div className='flex gap-3'>
          <div className='bg-teal-400 h-80 py-4 px-3'>
            Route Group Layout
            </div>
            {children}
        </div>
    )
}

export default RouteGroupLayout;