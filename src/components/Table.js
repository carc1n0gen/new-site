import { useMemo } from "react";

export default function Table({ children }) {
  const [
    {
      props: {
        children: {
          props: { children: headCols },
        },
      },
    },
    {
      props: { children: bodyRows },
    },
  ] = children;

  const memoizedRows = useMemo(() => {
    return Array.isArray(bodyRows)
      ? bodyRows.map((row, rowIdx) => {
          return (
            <tr key={rowIdx}>
              {row.props.children.map((child, colIdx) => (
                <td key={colIdx} className="p-3">
                  {child.props.children}
                </td>
              ))}
            </tr>
          );
        })
      : [
          <tr key="0" className="p-3">
            {bodyRows.props.children.map((child, idx) => (
              <td key={idx} className="p-3">
                {child.props.children}
              </td>
            ))}
          </tr>,
        ];
  }, [bodyRows]);

  return (
    <table className="w-full">
      <thead className="border-b-4 border-zinc-600">
        <tr>
          {headCols.map(({ props: { align, children } }) => (
            <th key={children} align={align} className="p-3">
              {children}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{memoizedRows}</tbody>
    </table>
  );
}
