import * as v from 'valibot';

export const validateFormData = <TEntries extends v.ObjectEntries>(
	formData: FormData,
	schema: v.ObjectSchema<TEntries>,
) => {
	const formDataObj = Object.fromEntries(formData.entries());
	const praseRes = v.safeParse(schema, formDataObj);
	if (!praseRes.success) {
		return {
			error: new Response(JSON.stringify(praseRes.issues), {
				status: 400,
				statusText: 'Payload validation failed',
			}),
		};
	}
	return { data: praseRes.output };
};
