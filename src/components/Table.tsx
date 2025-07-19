import React from "react";

interface Column {
  header: string;
  width?: string;
}

interface TableProps {
  columns: Column[];
  data: (string | number | React.ReactNode)[][];
  className?: string;
}

export function Table({ columns, data, className = "" }: TableProps) {
  return (
    <div className={`w-full ${className}`}>
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden table-fixed">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                style={{ width: column.width || `${100 / columns.length}%` }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-gray-900 break-words"
                >
                  {typeof cell === "string" || typeof cell === "number"
                    ? String(cell)
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
