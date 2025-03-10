import { FaCodeBranch } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export interface DataType {
  id: number;
  title: string;
  icon: React.ReactNode;
  muchMoney: number;
  moneyIcon: React.ReactNode;
}

interface ItemType {
  item: DataType[];
}

export default function BranchComponent({ item }: ItemType) {
  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-x-4 border border-[#eee] p-2 rounded-lg shadow-sm">
          <div className="space-y-2 text-black flex-1">
            <h1 className="text-lg font-semibold tracking-wide flex items-center justify-start gap-x-1">
              <FaCodeBranch className="w-5 h-5" />
              <span>Barchi Branch</span>
            </h1>
            <p className="text-[#335]">
              The sales department drives business growth through strategic
              partnerships and client relationships.
            </p>
          </div>
          <div className="flex items-start justify-start gap-x-2 flex-2">
            <button className="bg-green-500 text-white py-1 px-2 rounded-full">
              View Teachers
            </button>
            <button className="bg-blue-500 text-white py-1 px-2 rounded-full">
              View Students
            </button>
            <button className="bg-purple-500 text-white py-1 px-2 rounded-full">
              View Employees
            </button>
          </div>
        </div>
        <div className="py-3 space-y-2 border border-[#eee] p-2 rounded-lg shadow-sm text-black">
          <h1 className="text-lg font-semibold tracking-wide flex items-center justify-start gap-x-1">
            <RiMoneyDollarCircleLine className="w-7 h-7" />
            <span>Financial</span>
          </h1>
          <div className="flex items-center justify-start">
            {item.map((fdata) => (
              <div className="p-4">{fdata.title}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
