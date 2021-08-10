import { Card, CardContent, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { InvestmentDetails } from '../types';

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
							<pre>{JSON.stringify(values, null, 4)}</pre>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default FormDemo;
