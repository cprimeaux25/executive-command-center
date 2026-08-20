import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ADMIN_EMAIL = "cprimeaux@etec-services.com";

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return Response.json({ error: "Supabase admin configuration is unavailable." }, { status: 500 });
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data, error } = await admin.auth.admin.inviteUserByEmail(ADMIN_EMAIL, {
    data: { full_name: "Christian Primeaux" },
    redirectTo: `${request.headers.get("origin") ?? "https://id-preview--bcc250d7-e6ac-44ff-8e94-b188bca38223.lovable.app"}/reset-password`,
  });

  if (error || !data.user) {
    return Response.json({ error: error?.message ?? "Account invitation failed." }, { status: 400 });
  }

  const userId = data.user.id;
  const { error: profileError } = await admin.from("profiles").upsert({
    id: userId,
    email: ADMIN_EMAIL,
    full_name: "Christian Primeaux",
    role: "admin",
    status: "approved",
  });

  const { error: roleError } = await admin.from("user_roles").upsert(
    { user_id: userId, role: "admin" },
    { onConflict: "user_id,role" },
  );

  if (profileError || roleError) {
    await admin.auth.admin.deleteUser(userId);
    return Response.json(
      { error: profileError?.message ?? roleError?.message ?? "Admin access setup failed." },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
});