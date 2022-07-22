import React from 'react'
import { useRouter } from "next/router";

const ViewColection = (props) => {
    const router = useRouter();
    const metadata = router.query.metadata
    console.log(router.query.metadata)
  return (
    <div className='py-12 px-36'>
        <h1 className="text-4xl pb-10">{router.query.id}</h1>
    </div>
  )
}

export default ViewColection;
