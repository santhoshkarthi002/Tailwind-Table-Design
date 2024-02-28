import listData from "../../appointment.json";
import { AppointmentListProps, ColumnProps } from "./types";

export const TableData = ({
  list,
  tableColumn,
}: {
  list: AppointmentListProps;
  tableColumn: ColumnProps[];
}) => {
  return (
    <>
      {tableColumn.map((coloum: ColumnProps) => {
        return (
          <>
            {coloum.renderCell ? (
              <td className={`${coloum.dataStyle}`} key={list[coloum.name as keyof AppointmentListProps]}>
                {coloum.renderCell(list)}
              </td>
            ) : (
              <td
                key={list[coloum.name as keyof AppointmentListProps]}
                className={`${coloum.dataStyle}`}
              >
                {list[coloum.name as keyof AppointmentListProps]}
              </td>
            )}
          </>
        );
      })}
    </>
  );
};

export const TableBody = ({ tableColumn }: { tableColumn: ColumnProps[] }) => {
  const tableData = listData.appointments as AppointmentListProps[];
  return (
    <tbody>
      {tableData.map((list, index) => {
        return (
          <tr key={index} className="border-b bg-white  ">
            <TableData list={list} tableColumn={tableColumn} />
          </tr>
        );
      })}
    </tbody>
  );
};
