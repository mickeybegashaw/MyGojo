"use client"; 

import dynamic from 'next/dynamic';

const GridLoader = dynamic(() => import('react-spinners').then(mod => mod.GridLoader), { ssr: false });

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-100">
      <GridLoader color="#334155" size={10} />
    </div>
  );
};

export default Loading;
