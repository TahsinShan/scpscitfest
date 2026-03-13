import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rfslqjeclbkfmnbsapkc.supabase.co";
const supabaseKey = "sb_publishable_jYdPz6UMM-qVU6vrLLs4ig_3iW1JuhQ";

export const supabase = createClient(supabaseUrl, supabaseKey);