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
import { InvestmentDetails } from '../types';
import { object, string, number, boolean, array, mixed } from 'yup';
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
				<Formik
					validationSchema={object({
						fullName: string().required().min(2).max(100),
						initialInvestment: number().required().min(0),
						dependents: number().required().min(0).max(5),
						acceptedTermsAndConditions: boolean().oneOf([true]),
						investmentRisk: array(
							string().oneOf(['High', 'Medium', 'Low'])
						).min(1),
						commentAboutInvestmentRisk: mixed().when('investmentRisk', {
							is: (investmentRisk: string[]) =>
								investmentRisk.find((ir) => ir === 'High'),
							then: string().required().min(20).max(100),
							otherwise: string().min(20).max(100),
						}),
					})}
					initialValues={initialValues}
					onSubmit={() => {}}
				>
					{({ values, errors }) => (
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
								<label>Select the risk you want to take:</label>
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

							<Box marginBottom={2}>
								<FormGroup>
									<Field
										as={TextField}
										name='commentAboutInvestmentRisk'
										label='Comment about Investment Risk'
										multiline
										rows={3}
										rowsMax={10}
									/>
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
							/>*/}

							<Box marginBottom={2}>
								<FormGroup>
									<Field
										as={TextField}
										name='dependents'
										label='Dependents'
										select
									>
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

							<pre>{JSON.stringify(errors, null, 4)}</pre>
							<pre>{JSON.stringify(values, null, 4)}</pre>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default FormDemo;
