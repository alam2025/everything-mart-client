
import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from "react-icons/bs";
const Table = ({ data, setShowPopup, setId, index, }) => {
      const { ID, customerName, totalAmount, orderDate } = data;

     
      return (
            <tr>
                  <td>{index + 1}</td>
                  <td onClick={() => [setShowPopup(true), setId(ID)]} title='Click for Details' className='hover:font-bold cursor-pointer bg-gray-50 '>{ID}
                  <BsBoxArrowUpRight/>
                  </td>
                  <td>{customerName}</td>
                  <td>${totalAmount.toFixed(2)}</td>
                  <td>{moment(orderDate).format("DD / MM / YYYY")}</td>

                  <td >
                        <Link to={`/invoice/${ID}`} className=' btn btn-sm btn-secondary btn-outline'>Invoice</Link>

                     
                  </td>
            </tr>
      );
};

export default Table;