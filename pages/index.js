import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center w-[100vw] min-h-full bg- bg-hiendai bg- bg-cover   ">
      <div className="w-[100vw] h-[10vh]   bg-slate-900 text-white flex justify-between" >
      <div className="flex flex-nowrap">
        
        <img 
        className='rounded-[50%] w-[50px] h-[50px] mt-[20px] ml-[30px]'
        src="https://media.istockphoto.com/id/1324559790/vi/vec-to/vector-thi%E1%BA%BFt-k%E1%BA%BF-logo-ch%E1%BB%AF-v.jpg?s=612x612&w=0&k=20&c=3MfAcpVJQg_cBHUW8N9kWMgWkI37bx02yNVNWtuwBi4="
         />
         <p className='text-xl pt-[30px] ml-[10px]'>Vinh Pham</p>
      </div>
      {/* space betweeb để tạô khoảng cách, để cho các cột luôn sát với 2 bên */}
      {/* để tạo menu lại dùng flex tiếp, thêm gap để tạo khoảng cách */}
      <div className="flex flex-nowrap gap-10 pr-[100px] ">
        <p className='mt-[35px]'>Home1</p>
        <p className='mt-[35px]'>Home2</p>
        <p className='mt-[35px]'>Home3</p>
        <p className='mt-[35px]'>Home4</p>
        <p className='mt-[35px]'>Home5</p>
      
      </div>
      {/* ở đây chia tiếp layout thành 2 cột, 1 cột chứa chữ, 1 cột chứa ảnh */}
     
      
    {/* và dòng cuối cùng có mấy cái logo ở dưới này */}
      {/* ở dưới làm tương tự nhưng không cần  dùng justify-between, chỉ cần chia làm 2 cột, có thể dùng grid, trong những cột này lại chia thành dòng, rồi cột nếu có....
      dùng thẻ p, hx (x=1,2,3,4,5,6) thì không cần dùng thẻ <br /> để xuống  dòng */}
    </div>
       <div className=" flex w-[100vw] h-[90vh] mt-[10vh] justify-center ">
        <div className=''>
          <h1 className=' text-black text-6xl pt-[150px] pl-[100px] italic'>Hi,</h1>
          <h1 className=' flex text-black text-6xl pl-[100px] mt-10'>
            <p>I'm</p>
            <p className='ml-[20px] text-orange-400 italic'> Pham Vinh</p>
          </h1>
          <h1 className=' flex text-black text-6xl pl-[100px]  mt-10'>
            <p>Tôi Thích</p>
            <p className='ml-[20px] text-orange-400 italic'> BỐC PHÉT</p>
          </h1>
          <button className=" 2xl:bg-red-500 bg-black text-white rounded-[8px] px-[16px] py-[10px] ml-[100px] mt-[10px] ease-in duration-300 hover:bg-pink-600 hover:translate-y-[-4px] hover:shadow-noibat ">
        Ơ BAO MI
      </button>
          
          
          <div className='flex flex-nowrap gap-1'>
            <img
            href='https://www.facebook.com/profile.php?id=100050004546350&mibextid=ZbWKwL'
            className='w-[30px] h-[30px] rounded-[50%] mt-[15px] cursor-pointer ml-[100px] ' 
            src='data:image/png;base64,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'/>
            <img/>
            <img
            className='w-[30px] h-[30px] rounded-[50%] mt-[15px] cursor-pointer ' 
            src='data:image/png;base64,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'/>
            <img/>

          </div>
          
        </div>
        <div className="">
          <img
          className='rounded-[50%] h-[500px] w-[500px] ml-[400px]' 
          src='vinh.jpg'/>
        </div>
      </div>
  

    {/* phân tích layout trước, hàng trc cột sau */}
    {/* như ảnh  thì có 1 hàng phần trên sẽ chia làm 2 cột: Logo và Menu */}

    
    </main>
  )
}

// z index chỉ dùng cho các thẻ  có absolute cùng  hàng với nhau thôi