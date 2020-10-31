import Card from './Card.js'

const Table = ({ cards }) => {
  return (
    <table>
      <tbody>
        {[0,4,8].map((index, _) => {
          return (
            <tr key={index}>
              <td key={index}><Card id={cards[index]} /></td>
              <td key={index + 2}><Card id={cards[index + 1]} /></td>
              <td key={index + 3}><Card id={cards[index + 2]} /></td>
              <td key={index + 4}><Card id={cards[index + 3]} /></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;
