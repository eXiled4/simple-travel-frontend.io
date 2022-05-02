import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './expenses/reducer/AppContext';
import Budget from './expenses/Budget';
import ExpenseTotal from './expenses/ExpenseTotal';
import ExpenseList from './expenses/ExpenseList';
import AddExpenseItem from './expenses/AddExpenseItem';
import Remaining from './expenses/Remaining';
import './expenses/Expenses.css'

export default class Expenses extends Component {

	render() {
		return (
			<AppProvider>
			<div className='container'>
				<br></br>
				<h1 className='fancy'><b> Your Budget Planner </b></h1><br></br>
				<h3 className='fancy1'><i>Did you hear about that constipated accountant? He used a pencil to budget</i></h3><br></br>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseItem />
					</div>
				</div>
			</div>
		</AppProvider>
		);
	}
}