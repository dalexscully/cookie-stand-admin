
export default function CookieStandRow({ info, deleteStand }) {

  function clickHandler() {
      deleteStand(info.id);
  }

  if (info.hourly_sales.length == 0) {
      // bunk data
      info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  return (
      <tr>
          <td>{info.location} <button onClick={clickHandler}>[x]</button></td>
          {info.hourly_sales.map((slot,index) => <td key={index}>{slot}</td>)}
          <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
      </tr>
  );
}
