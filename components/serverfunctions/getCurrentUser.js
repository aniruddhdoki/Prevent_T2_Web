import { createClient } from '@/utils/supabase/server';

export default async function getCurrentUser() {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    return user;
}