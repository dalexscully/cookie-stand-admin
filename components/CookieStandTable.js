import useResource from '../hooks/useResource';
import CookieStandRow from './CookieStandRow';

export default function ReportTable() {
  const { resources, deleteResource } = useResource();
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>6 am</th>
          <th>7 am</th>
          <th>8 am</th>
          <th>9 am</th>
          <th>10 am</th>
          <th>11 am</th>
          <th>12 pm</th>
          <th>1 pm</th>
          <th>2 pm</th>
          <th>3 pm</th>
          <th>4 pm</th>
          <th>5 pm</th>
          <th>6 pm</th>
          <th>7 pm</th>
          <th>totals</th>
        </tr>
      </thead>
      <tbody>
        {resources.map(stand => (

          <CookieStandRow key={stand.id} info={stand || [ ]} deleteStand={deleteResource} />
        ))}
      </tbody>
    </table>
  );
  
}
