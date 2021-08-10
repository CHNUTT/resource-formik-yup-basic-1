import {
	Box,
	Button,
	Card,
	CardContent,
	FormGroup,
	MenuItem,
	TextField,
	Typography,
} from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { InvestmentDetails } from '../types';
import { object, string, number, boolean, array, mixed } from 'yup';
import MyCheckbox from './Checkbox';

const initialValues: InvestmentDetails = {
	fullName: '',
	initialInvestment: 0,
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
						initialInvestment: number().required().min(1),
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
					onSubmit={(values, formikHelpers) => {
						return new Promise((resolve) => {
							setTimeout(() => {
								console.log(values);
								console.log(formikHelpers);
								console.log('---------');
								resolve(1);
							}, 5000);
						});
					}}
				>
					{({ values, errors, isSubmitting, isValidating }) => (
						<Form>
							<Box marginBottom={2}>
								<FormGroup>
									<Field name='fullName' as={TextField} label='Full Name' />
									<ErrorMessage name='fullName' />
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
									<ErrorMessage name='initialInvestment' />
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
									<ErrorMessage name='investmentRisk' />
								</FormGroup>
							</Box>

							<Box marginBottom={2}>
								<FormGroup>
									<Field
										as={TextField}
										name='commentAboutInvestmentRisk'
										label='Comment about Investment Risk'
										multiline
										minRows={3}
										maxRows={10}
									/>
									<ErrorMessage name='commentAboutInvestmentRisk' />
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
										<MenuItem value={-1}>Select...</MenuItem>
										<MenuItem value={0}>0</MenuItem>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
										<MenuItem value={3}>3</MenuItem>
										<MenuItem value={4}>4</MenuItem>
										<MenuItem value={5}>5</MenuItem>
									</Field>
									<ErrorMessage name='dependents' />
								</FormGroup>
							</Box>

							<Box marginBottom={2}>
								<FormGroup>
									<MyCheckbox
										name='acceptedTermsAndConditions'
										label='Accepted terms and conditions'
									/>
									<ErrorMessage name='acceptedTermsAndConditions' />
								</FormGroup>
							</Box>
							{/* <Field
								as={MyCheckbox}
								name='acceptedTermsAndConditions'
								label='Accepted terms and conditions'
							/> */}

							<Button type='submit' disabled={isSubmitting || isValidating}>
								Submit
							</Button>

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
