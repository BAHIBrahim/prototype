

const Test = () => {


  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col bg-slate-100 rounded-lg w-[60rem]">
        <div className="w-full bg-emerald-500 rounded-t-lg p-2">
          <h1 className="font-bold text-2xl text-white">Products List</h1>
        </div>
        <div className="p-2">
          <form action="" method="post">
            <div className="flex items-center ml-8 mt-2">
              <label className="font-semibold text-lg mr-4 text-slate-800">Name: </label>
              <input className="rounded-md px-4 text-lg mr-2 outline-emerald-500 text-slate-600" type="text" />
              <button className="bg-emerald-500 rounded-md text-white font-semibold px-1 text-lg" type="submit">Search</button>
            </div>

          </form>
        </div>
        <div className="p-3 inline-block">
          <table className="table-fixed w-full bg-white border-b-2 border-emerald-400">
            <tr className="bg-emerald-400 font-semibold">
              <td className="w-1/12 pl-3 rounded-tl-xl py-1">ID</td>
              <td className="w-5/12">Name</td>
              <td className="w-2/12">Price</td>
              <td className="w-2/12">Quantity</td>
              <td className="w-1/12"></td>
              <td className="w-1/12 rounded-tr-xl"></td>
            </tr>
            <tr className="">
              <td className="pl-3 py-1">1</td>
              <td className="font-medium">Acer Aspire 3</td>
              <td className="font-medium">300.99</td>
              <td className="font-medium">1</td>
              <td className="font-medium">Delete</td>
              <td className="font-medium">Edit</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Test;