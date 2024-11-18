import React from 'react';

interface PropsType {
    title: string;  // Define the type for the 'title' prop
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className='text-center text-4xl pb-8'>
      <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  );
};

export default Heading;

// import { title } from 'process'
// import React from 'react'

// interface propsType{
//     title: string
// }

// const Heading: React.FC<propsType> =({title}) => {
//   return (
//     <div className='text-center text-4xl pb-8'>
//     <p className='border-b-4  inline-block pb-2'> {title}</p>
//     </div>
//   )
// }

// export default Heading