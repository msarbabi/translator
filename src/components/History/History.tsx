import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import { State } from "../../redux/reducers";

import "../../styles/History.scss";

const History: React.FunctionComponent = () => {
  interface getHistory {
    text: string;
    textTranslated: string;
  }

  const history: getHistory[] = useSelector((state: State) => state.getHistory);

  return (
    <div className="history">
      <h3 className="title">History</h3>
      <Table>
        <thead>
          <tr>
            <th data-testid="from-title">From English</th>
            <th data-testid="to-title">To other language</th>
          </tr>
        </thead>
        <tbody>
          {history.length
            ? history.map((item) => (
                <tr>
                  <td>{item.text}</td>
                  <td>{item.textTranslated}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default History;
