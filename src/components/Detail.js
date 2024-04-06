import ReactStars from 'react-stars'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../Firebase/firebase'
import { ThreeCircles, ThreeDots } from 'react-loader-spinner'
import Review from './Review'


const Detail = () => {
    const {id} = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated: 0
  });
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();
  },[])
  return (
    <div className='p-4  mt-4 w-full flex flex-col md:flex-row items-center md:items-start justify-center'>
        {loading?<ThreeDots height={20}/>:
        <>
        <img className='h-96 md:sticky md:top-24 ' src={data.image}/>
        <div className='ml-0  md:ml-4 w-full md:w-1/2'>
            <h1 className='text-2xl font-bold text-gray-400'>{data.title} <span className='text-xl'>({data.year})</span></h1>
            <ReactStars
            size={20}
            half={true}
            value={data.rating/data}
            edit={false}/>

           

            <p className='mt-3 '>{data.description}
            </p>

            <Review id={id} prevRating={data.rating} userRated={data.rated}></Review>

        </div>
        </>
}
    </div>
  )
}

export default Detail