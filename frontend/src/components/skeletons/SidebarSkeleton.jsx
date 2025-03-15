import React from 'react'

import { Users } from 'lucide-react';

const SidebarSkeleton = () => {
     const skeletonContacts = Array(8).fill(null);

     return (
     <aside className='h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200'>
          {/* Header */}
          <div className='border border-base-300 w-full p-5'>
               <div className='flex items-center gap-2'>
                    <Users className='size-6'/>
                    <span className='font-medium hidden lg:block'>Contacts</span>
               </div>
          </div>

          {/* skeleton contancts */}
          <div className='overflow-y-auto w-full py-3'>
               {skeletonContacts.map((_, idx) => (
                    <div
                         key={idx}
                         className='w-full p-3 flex items-center gap-3'
                    >
                         {/* avatar skeleton */}
                         <div className='relative mx-auto lg:mx-0'>
                              <div className='skeleton size-12 rounded-full' />
                         </div>

                         {/* user info skeleton - visible on larger screen */}
                         <div className='hidden lg:block text-left min-w-0 fle-1'>
                              <div className='skeleton h-4 w-32 mb-2'/>
                              <div className='skeleton h-3 w-16'/>
                         </div>
                    </div>
               ))}
          </div>
     </aside>
     )
}

export default SidebarSkeleton;