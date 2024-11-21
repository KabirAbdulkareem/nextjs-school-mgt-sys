import { Teacher } from "@/app/(dashboard)/list/teachers/page";

const Table = ({
  columns,
  renderRow,
}: {
  columns: {
    header: string;
    accessor: string;
    className?: string;
  }[];
  renderRow:(item:Teacher)=>React.ReactNode
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
