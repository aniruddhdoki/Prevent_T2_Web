'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user.id);
    
    const { data, error } = await supabase
    .from('activity_log')
    .insert({ 
        minutes: formData.get('minutes'),
        difficulty: formData.get('difficulty'),
        activity: formData.get('activity'),
        user: user.id
     })
     .select()

    redirect('/activities'); 
    
}