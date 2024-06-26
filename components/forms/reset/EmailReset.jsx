'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'
import resetEmail from '@/lib/reset/resetEmail'
import { Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import MuiTextField from '../../inputs/MuiTextField'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";


export default function EmailReset({ email }) {
    const [state, formAction] = useFormState(resetEmail, { message: null }) 
    const [edit , setEdit] = useState(false)

    function handleEdit() {
        setEdit(!edit)
    }

    return (
      <div>
        <form action={formAction}>
          <Box display="flex">
            <MuiTextField
              //className="rounded-md px-4 py-2 bg-inherit border mb-6"
              id={"email"}
              type="email"
              label={null}
              name="email"
              defaultValue={email}
              required
              disabled={!edit}
            />
            {!edit ? (
              <IconButton label="Edit" onClick={handleEdit}>
                <EditIcon />
              </IconButton>
            ) : null}
            {edit ? (
              <>
                <IconButton type="submit">
                  <CheckIcon />
                </IconButton>
                <IconButton label="Close" onClick={handleEdit}>
                  <CloseIcon />
                </IconButton>
              </>
            ) : null}
          </Box>
        </form>
      </div>
    );
}