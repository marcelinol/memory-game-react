const Table = ({ cards }) => {
  return (
    <table>
      <tbody>
        <tr>
          {cards.map((_card, index) => {
            console.log(index % 4)
            if(index % 4 == 0) {
              return (
                <tr>
                  <td>{cards[index]}</td>
                  <td>{cards[index + 1]}</td>
                  <td>{cards[index + 2]}</td>
                  <td>{cards[index + 3]}</td>
                </tr>
              )
            }
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default Table
