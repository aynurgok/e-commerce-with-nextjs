import '../Header/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  return (
    <div className=" w-full p-4 border-solid bg-slate-200">
      <div className='row-auto'>
        <div className='flex items-center justify-between '>
           <a className="logo">.logo</a>
           <input type="search"  className='search-input' placeholder="Search..."/>
           <div className='flex items-center justify-center gap-2 header-icons px-2'>
             <CiShoppingBasket className='header-icons d-none d-sm-block' />
             <MdFavoriteBorder className='header-icons d-none d-sm-block'/>
             <IoMdMenu className='d-block d-sm-none' />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Header