import { hours } from '@/data';
import { sales } from '@/data';

export default function ReportTable(props) {
  return props.reportTable.length > 0 ? (
    <table className="w-11/12 my-4 mr-20 ml-20 ">
      <thead>
        <tr className='bg-gray-400 rounded-lg border-2' >
          <th className="pl-2 rounded border-2 border-gray-400">Location</th>
          {hours.map((hour, idx) => {
            return (
              <th key={idx} className="pl-2 rounded-lg border-2 border-gray-400">{hour}</th>
            );
          })}
          <th className="pl-2 rounded-lg border-2 border-gray-400">Totals</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, idx) => {
          const city = Object.keys(sale)[0];
          const values = sale[city];
          return (
            <tr key={idx} className="bg-gray-300" >
              <td className="pl-2 border border-gray-400">{city}</td>
              {values.map((value, idx) => {
                return (
                  <td key="idx" className="pl-2 border border-gray-400">{value}</td>
                );
              })}
            </tr>
          );
        })}
        <tr></tr>
      </tbody>
      <tfoot>
      </tfoot>
    </table>
  ) : (
    <h2 className="text-center text-4xl">No Cookie Stands Available</h2>
  );
}
