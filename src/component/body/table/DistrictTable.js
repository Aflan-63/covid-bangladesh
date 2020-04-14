import React, { Component } from 'react'
import '../../../style.css'
export default class DistrictTable extends Component {
    render() {
        return (

            < div className="tablespace" >
                <div class="table-title">
                    <h3>District Wise</h3>
                </div>
                < table className="table-fill" >
                    <thead>
                        <tr>
                            <th className="text-left">Issue</th>
                            <th className="text-left">Issue Reference</th>
                            <th className="text-left">Start Time</th>
                            <th className="text-left">EFT</th>
                            <th className="text-left">Status</th>
                            <th className="text-left">Warning</th>
                            <th className="text-left">Warning</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        <tr>
                            <td className="text-left">January</td>
                            <td className="text-left">50,000.00</td>
                            <td className="text-left">50,000.00</td>
                            <td className="text-left">50,000.00</td>
                            <td className="text-left">50,000.00</td>
                            <td className="text-left">50,000.00</td>
                            <td className="text-left">50,000.00</td>
                        </tr>
                        <tr>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">50,000.00</td>
                        </tr>
                        <tr>
                            <td className="text-left">March</td>
                            <td className="text-left">85,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">50,000.00</td>
                        </tr>
                        <tr>
                            <td className="text-left">TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</td>
                            <td className="text-left">56,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">50,000.00</td>
                        </tr>
                        <tr>
                            <td className="text-left">May</td>
                            <td className="text-left">98,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">February</td>
                            <td className="text-left">10,000.00</td>
                            <td className="text-left">50,000.00</td>
                        </tr>
                    </tbody>
                </table >
            </div >

        )
    }
}
