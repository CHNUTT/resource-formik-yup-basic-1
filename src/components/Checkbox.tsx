import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

/**
 * NOTE: useField() to bind any form's element to formik
 */

interface ICheckboxProps {
	name: string;
	value?: string | number;
	label?: string;
}
const MyCheckbox: React.FC<ICheckboxProps> = (props) => {
	const [field] = useField({
		name: props.name,
		value: props.value,
		type: 'checkbox',
	});

	return (
		<FormControlLabel
			control={<Checkbox {...field} {...props} />}
			label={props.label}
		/>
	);
};

export default MyCheckbox;
