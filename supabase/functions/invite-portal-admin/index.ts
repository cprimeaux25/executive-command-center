import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ADMIN_EMAIL = "cprimeaux@etec-services.com";
const LEGACY_ADMIN_EMAIL = "cprimeaux@prime-proservices.com";

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const authorization = request.headers.get("authorization");
  const publishableKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!publishableKey || authorization !== `Bearer ${publishableKey}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return Response.json({ error: "Supabase admin configuration is unavailable." }, { status: 500 });
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: usersData, error: usersError } = await admin.auth.admin.listUsers();
  const existingUser = usersData?.users.find(
    (user) => user.email?.toLowerCase() === ADMIN_EMAIL || user.email?.toLowerCase() === LEGACY_ADMIN_EMAIL,
  );

  if (usersError || !existingUser) {
    return Response.json({ error: usersError?.message ?? "Existing administrator account was not found." }, { status: 404 });
  }

  const { data, error } = await admin.auth.admin.updateUserById(existingUser.id, {
    email: ADMIN_EMAIL,
    email_confirm: true,
    user_metadata: { ...existingUser.user_metadata, full_name: "Christian Primeaux" },
  });

  if (error || !data.user) {
    return Response.json({ error: error?.message ?? "Account update failed." }, { status: 400 });
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
    return Response.json(
      { error: profileError?.message ?? roleError?.message ?? "Admin access setup failed." },
      { status: 500 },
    );
  }

  const redirectTo = `${request.headers.get("origin") ?? "https://id-preview--bcc250d7-e6ac-44ff-8e94-b188bca38223.lovable.app"}/reset-password`;
  const { error: resetError } = await admin.auth.resetPasswordForEmail(ADMIN_EMAIL, { redirectTo });

  if (resetError) {
    return Response.json({ error: resetError.message }, { status: 400 });
  }

  return Response.json({ success: true });
});