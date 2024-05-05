import React, { ReactNode } from 'react';

function DashboardLayout ({children} : {children:ReactNode}) {

    return(
        <div className='flex gap-3'>
          <div className='bg-slate-400 h-80 py-4 px-3'>
            DashboardLayout
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout;