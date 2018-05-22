import React from 'react';

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>Card information</div>
        <div>*required field</div>
        <div>First name on card*</div>
        <input/>
        <div>Last name on card*</div>
        <input/>
        <div>Card number*</div>
        <div>Expiration date*</div>
        <select>
          <option>MM</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <select>
          <option>YY</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
        </select>
        <div>Security code*</div>
        <input />
        <div>Phone number* (Ex: (202) 555-0115)</div>
        <input />
        <div>Billing address</div>
        <label><input type='checkbox'/>Same as shipping</label>
        <div>{this.props.address}</div>
        <div>Review Your Order</div>
      </div>
    )
  }
}
