import './App.css';
import React, { useState } from 'react';
import { getEMI, getEventValue, getTotalPay, getInterestPay, getCurrency } from './functions';

function App() {

	const [amount, setAmount] = useState(500000);
	const [year, setYear] = useState(3);
	const [interest, setInterest] = useState(7);

	let EMI = getEMI(amount, interest, year);
	let totalPay = getTotalPay(year, EMI);
	let interestPay = getInterestPay(totalPay, amount);

	return (
		<div className='section'>
			<p>Home Loan EMI Calculator</p>
			<div className='main'>
				<div className='left sidebar'>
					<div className='amount'>
						<div className='loan'>
							<h2>LOAN AMOUNT</h2>
							<div className='comun'>
								<span className='currency'>₹</span>
								<input
									type="text"
									value={amount}
									onChange={(event) => {
										setAmount(getEventValue(event))
									}}
								/>
							</div>

						</div>
						<input
							type="range"
							max="100000000"
							min="0"
							value={amount}
							onChange={(event) => {
								setAmount(getEventValue(event))
							}}
						/>
						<div className='bot'>
							<div className='lac' >₹ 1 Lac</div>
							<div className='cr'>₹ 10 cr</div>
						</div>

					</div>
					<div className='year'>
						<div className='loan'>
							<h2>TENURE (YEARS)</h2>
							<input
								type="text"
								value={year}
								onChange={(event) => {
									setYear(getEventValue(event))
								}}
							/>
						</div>
						<input
							type="range"
							max="30"
							value={year}
							onChange={(event) => {
								setYear(getEventValue(event))
							}}
						/>
						<div className='rag'>
							<div className='str' > 1 </div>
							<div className='end'> 30 </div>
						</div>
					</div>
					<div className='interest'>
						<div className='loan'>
							<h2>INTEREST RATE (% P.A.)</h2>
							<div className='div'>
							<input
								type="text"
								value={interest}
								onChange={(event) => {
									setInterest(getEventValue(event))
								}}
							/>
								<span className='symbol'>%</span>
							</div>
						</div>
						<input
							type="range"
							max="15"
							step="0.01"
							value={interest}
							onChange={(event) => {
								setInterest(getEventValue(event))
							}}
						/>
						<div className='rang'>
							<div className='star' > 0 </div>
							<div className='clo'> 15 </div>
						</div>
					</div>
				</div>
				<div className='right sidebar'>
					<div className='amount emi'>
						<div className='label'>Monthly Home Loan EMI</div>
						<div className='value'>
							<span className='currency'>₹</span>
							{getCurrency(EMI)}
						</div>
					</div>
					<div className='amount'>
						<div className='label'>Principal Amount</div>
						<div className='value'>
							<span className='currency'>₹</span>
							{getCurrency(amount)}
						</div>
					</div>
					<div className='amount'>
						<div className='label'>Interest Amount</div>
						<div className='value'>
							<span className='currency'>₹</span>
							{getCurrency(interestPay)}
						</div>
					</div>
					<div className='amount'>
						<div className='label'>Total Amount Payable</div>
						<div className='value'>
							<span className='currency'>₹</span>
							{getCurrency(totalPay)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
