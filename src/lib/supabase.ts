import { createClient } from "@supabase/supabase-js";

// Define the URL and key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client with simplified options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  },
});

// Add a simple health check function
export const checkSupabaseConnection = async () => {
  try {
    // Simple ping to check if we can reach Supabase
    const response = await fetch(
      `${supabaseUrl}/rest/v1/?apikey=${supabaseAnonKey}`
    );
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      statusText: error instanceof Error ? error.message : String(error),
    };
  }
};
