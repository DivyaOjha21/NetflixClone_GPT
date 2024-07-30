import React, { useEffect } from 'react'
import GptSearch from './GptSearch'
import GptMovieSuggetions from './GptMovieSuggetions'
import { BG_Img } from '../../utils/constants'
import Reports from './Reports'

const GptPage = () => {
   

    return (
        <div className="relative ">
            <div className="absolute bg-black bg-opacity-80 select-none w-screen h-full">
                <img src={BG_Img} alt=""  className=' object-cover' width={"100%"} height={'100%'}/>
            </div>
            <div className="absolute mt-50 overflow-x-hidden">
                <GptSearch />
                <GptMovieSuggetions />
            </div>
        </div>
       
    )
    // const data = [
    //     { name: 'John Doe', age: 30, city: 'New York' },
    //     { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    //     { name: 'Peter Johnson', age: 35, city: 'Chicago' },
    //   ];
    
    //   return (
    //     <div>
    //       <h1>Export Data to Excel</h1>
    //       <Reports data={data} fileName="sample_data" />
    //     </div>
    //   );
}

export default GptPage
