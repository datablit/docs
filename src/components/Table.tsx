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
    <div className={`w-full my-2 ${className}`}>
      <table className="w-full rounded-lg overflow-hidden table-fixed">
        <thead className="bg-surface ">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-4 py-2 text-left text-xs font-medium text-text-para uppercase tracking-wider border-b border-border"
                style={{ width: column.width || `${100 / columns.length}%` }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-surface divide-y divide-border">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-table-hover-rows">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 text-sm text-text-para break-words"
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
