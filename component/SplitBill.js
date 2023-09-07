function SplitBill(){
    return(
        <div>
      <h3>Split A Bill With SARRAH</h3>
      <div>
        <label>Bill Value</label>
        <input />
      </div>
      <div>
        <label>Your Expense</label>
        <input />
      </div>
      <div>
        <label>Sarah's Expense</label>
        <input />
      </div>
      <div>
        <label>Who is paying the bil</label>
        <select>
          <option>You</option>
          <option>Sarah</option>
        </select>
      </div>
      <button>Split bill</button>
    </div>
    )
}
export default SplitBill;