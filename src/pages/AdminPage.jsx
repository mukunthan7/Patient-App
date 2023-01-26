import {useEffect, useState} from 'react'

const Admin = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const result = await res.json();
    setData(result.results);
  };
  
  return (
    <div className='min-h-screen bg-pink-200 items-center'>
        <div>
        {data.map((data) => (
          <div className='flex flex-col justify-center items-center' key={data.id.value}>
            <img className='mb-8 h-72 w-72 rounded-full border-4 border-pink-900' src={data.picture.large} alt="profile" />
            <h1 className='mb-2  font-Mont font-bold text-xl'>Name: <span className='font-light' >{data.name.first + " " + data.name.last}</span></h1>
            <h1 className='mb-2  font-Mont font-bold text-xl'>Admin id: <span className='font-light'>{data.id.value}</span></h1>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Admin