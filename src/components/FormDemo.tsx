import {
	Box,
	Card,
	CardContent,
	FormGroup,
	MenuItem,
	TextField,
	Typography,
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { InvestmentDetails } from '../types';
import MyCheckbox from './Checkbox';

const initialValues: InvestmentDetails = {
	fullName: '',
	initialInvestment: undefined,
	investmentRisk: [],
	commentAboutInvestmentRisk: '',
	dependents: -1,
	acceptedTermsAndConditions: false,
};

const FormDemo = () => {
	return (
		<Card>
			<CardContent>
				<Typography variant='h4'>New Account</Typography>
				<Formik initialValues={initialValues} onSubmit={() => {}}>
					{({ values }) => (
						<Form>
							<Box marginBottom={2}>
								<FormGroup>
									<Field name='fullName' as={TextField} label='Full Name' />
								</FormGroup>
							</Box>

							<Box marginBottom={2}>
								<FormGroup>
									<Field
										as={TextField}
										name='initialInvestment'
										type='number'
										label='Initial Investment'
									/>
								</FormGroup>
							</Box>

							{/* <FormControlLabel control={<Checkbox />} label='Secondary' /> */}
							<Box marginBottom={2}>
								<FormGroup>
									<MyCheckbox name='investmentRisk' value='High' label='High' />
									<MyCheckbox
										name='investmentRisk'
										value='Medium'
										label='Medium'
									/>
									<MyCheckbox name='investmentRisk' value='Low' label='Low' />
								</FormGroup>
							</Box>
							{/* <Field
								as={MyCheckbox}
								name='investmentRisk'
								label='High'
								value='High'
							/>
							<Field
								as={MyCheckbox}
								name='investmentRisk'
								label='Medium'
								value='Medium'
							/>
							<Field
								as={MyCheckbox}
								name='investmentRisk'
								label='Low'
								value='Low'
							/>

							<Field
								as={TextField}
								name='commentAboutInvestmentRisk'
								multiline
								rows={3}
								rowsMax={10}
							/> */}
							<Box marginBottom={2}>
								<FormGroup>
									<Field as={TextField} name='dependents' select>
										<MenuItem value={0}>0</MenuItem>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
										<MenuItem value={3}>3</MenuItem>
										<MenuItem value={4}>4</MenuItem>
										<MenuItem value={5}>5</MenuItem>
									</Field>
								</FormGroup>
							</Box>

							<Box marginBottom={2}>
								<FormGroup>
									<MyCheckbox
										name='acceptedTermsAndConditions'
										label='Accepted terms and conditions'
									/>
								</FormGroup>
							</Box>
							{/* <Field
								as={MyCheckbox}
								name='acceptedTermsAndConditions'
								label='Accepted terms and conditions'
							/> */}

							<pre>{JSON.stringify(values, null, 4)}</pre>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default FormDemo;
