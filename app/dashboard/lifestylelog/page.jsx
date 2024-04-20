'use client';

import MuiSelect from '@/components/lifestylelog/MuiSelect.jsx';
import MuiTextField from '@/components/lifestylelog/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import tableAction from '@/lib/lifestyleTableAction.jsx';
import MuiButton from '@/components/buttons/MuiButton';

export default function LifestyleCoachLogPage() {
    const [state, formAction] = useFormState(tableAction, { message: null })

    return (
        <>
            <form action={formAction}>
                <MuiTextField name="minutes" id="minutes" label="Exercise Minutes" variant="filled" />
                <MuiTextField name="weight" id="weight" label="Current Weight" variant="filled" />
                <MuiSelect defaultValue='' name="attendance" field="Attendance" field1="Yes" field2="No" field3="Online" />
                <MuiButton label="Submit" type="submit" startIcon={null}/>
            </form>
        </>
    )
}