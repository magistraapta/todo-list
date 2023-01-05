import React from 'react'
function Home() {
  return (
    <div className=' border-white border mt-6 mx-96 md:mx-16 sm:mx-8 bg-white rounded-lg'>
      <p className=' text-center font-semibold text-4xl my-9 mx-10 '>Tulis kegiatan kamu agar semakin produktif</p>
      <form className='flex justify-center my-10'>
        <input type="text" placeholder='Ketik di sini...' className='rounded-lg px-5 py-2.5 border-grey'/>
        <div className='p-2.5 bg-blue ml-2 rounded-lg m'>
          <button className=' text-white text-sm font-medium'>Tambah</button>
        </div>
      </form>
    </div>
  )
}

export default Home