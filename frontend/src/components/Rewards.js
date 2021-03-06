import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/rewards.css';

class Rewards extends Component {
    render() {
        return (
          <div>
            <h1>Rewards</h1>
              <h4>Rewards for the users</h4>
                <div className="table-center">
                  <table>
                    <tr>
                      <th><u>Rank</u></th>
                      <th><u>Rewards</u></th>
                    </tr>
                    <tr>
                      <th> Rank 1 </th>
                      <th> Next Uber ride is free</th>
                    </tr>
                    <tr>
                      <th> Rank 2 </th>
                      <th> 20% off ur choice of clothing store</th>
                    </tr>
                    <tr>
                      <th> Rank 3 </th>
                      <th> Free breakfast</th>
                    </tr>
                    <tr>
                      <th> Rank 4 </th>
                      <th> 2 dollars off next purchase</th>
                    </tr>
                    <tr>
                      <th> Rank 5 </th>
                      <th>free ice cream</th>
                    </tr>
                  </table>
                </div>

                <h4>Rewards for the Community</h4>
                <div className="table-center">
                  <table>
                    <tr>
                      <th><u>Points</u></th>
                      <th><u>Rewards</u></th>
                    </tr>
            
                    <tr>
                      <th> 500 Points </th>
                      <th> 30% off favorite Grocery store</th>
                    </tr>
                    <tr>
                      <th> 300 Points </th>
                      <th> 15% off favorite Grocery store</th>
                    </tr>
                    <tr>
                      <th> 150 Points </th>
                      <th> 5% off favorite Grocery store</th>
                    </tr>
                    <tr>
                      <th> 100 Points</th>
                      <th> 5 dollars off next purchase</th>
                    </tr>
            
                    <tr>
                      <th>50 Points</th>
                      <th>2 dollars off next purchase</th>
                    </tr>
                  </table>
                </div>
          </div>
        );
    }
}

export default Rewards;
